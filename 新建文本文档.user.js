// ==UserScript==
// @name         跳过 “2025 江苏省大学新生安全教育线上学习平台” 的 30 秒翻页限制
// @namespace    https://github.com/HyacinthHaru/jiangsu-safety-learning-bypass
// @version      1.0
// @description  自动解除30秒翻页限制，直接点击即可翻页
// @author       HaruHyacinth
// @match        http://wap.xiaoyuananquantong.com/guns-vip-main/wap/newStudentArticle*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=myhuaweicloud.com
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/HyacinthHaru/jiangsu-safety-learning-bypass
// @supportURL   https://github.com/HyacinthHaru/jiangsu-safety-learning-bypass/issues
// @downloadURL  https://raw.githubusercontent.com/HyacinthHaru/jiangsu-safety-learning-bypass/main/jiangsu-safety-bypass.user.js
// ==/UserScript==

(function() {
    'use strict';

    // 等待页面完全加载
    function waitForElement(selector, callback) {
        const interval = setInterval(() => {
            if (document.querySelector(selector)) {
                clearInterval(interval);
                callback();
            }
        }, 500);
    }

    waitForElement('#nextTop', () => {
        // 控制变量重新定义
        const oPicUl = $("#picBox ul");
        const w1 = $(window).width();
        const len1 = $('#picBox li').length;
        let index = 0;

        // 重绑定按钮
        $('#nextTop').off('click').on('click', () => {
            if (index < len1 - 1) {
                index++;
                oPicUl.animate({ 'left': -index * w1 });
            } else {
                handleTest(); // 这里是自动进入测试部分
            }
        });

        $('#prevTop').off('click').on('click', () => {
            if (index > 0) {
                index--;
                oPicUl.animate({ 'left': -index * w1 });
            } else {
                layer.msg("已经没有图片了");
            }
        });

        console.log("已经解除了翻页时间限制，现在可以随意翻页了。");

        
    });

})();