// ==UserScript==
// @name         Any_Porn blocker
// @name:zh-CN   任意_敏感内容屏蔽
// @namespace    https://github.com/liulipack/UserScript
// @version      0.1
// @description  通过关键词匹配域名、网站标题和网站内容，阻止访问色情网站。
// @author       LiuliPack
// @match        *://*/*
// @exclude      https://*.gravatar.com/*
// @grant        GM_addStyle
// @run-at       document-start
// @updateURL    https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/Any/Porn%20blocker_latest.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/Any/Porn%20blocker_latest.user.js
// @license      WTFPL
// ==/UserScript==

'use strict';

// 参数
let cfg = {
    "match": {
        "domain": true,
        "title": true,
        "content": false,
    },
    "show": {
        "title": "收手吧，外面全是成龙！",
        "icon": "data:;base64,iVBORw0KGgo=",
        "style": "html,body{background:#303030}"
    },
    "lists": ["18", "69", "adult", "av", "bdsm", "ero", "hani", "hentai", "jav", "porn", "sex", "sukebei", "xxx", "御所", "神社", "绅士", "色情", "音声"]
};

// 执行屏蔽
function block(clear = false) {
    if(clear) {
        document.body.innerHTML = '';
    }
    GM_addStyle(cfg.show.style);
    document.title = cfg.show.title;
    window.stop();
    // document.querySelector("link[rel*=icon]").href = cfg.show.icon; 元素未加载的话会报错，而我懒得写判断
};

// 立即检测域名
cfg.lists.filter(word => {
    if(cfg.match.domain && location.host.match(word) !== null) {
        console.log('敏感内容屏蔽 > 域名中发现关键词`' + word + '`，已将其屏蔽。');
        block();
    }
});

// 页面加载完成后检测标题
window.onload = () => {cfg.lists.filter(word => {
    if(cfg.match.title && document.title.toLowerCase().match(word) !== null) {
        console.log('敏感内容屏蔽 > 标题中发现关键词`' + word + '`，已将其屏蔽。');
        block(true);
    }else if(cfg.match.content && document.body.textContent.toLowerCase().match(word) !== null) {
        console.log('敏感内容屏蔽 > 网页中发现关键词`' + word + '`，已将其屏蔽。');
        block(true);
    }
})};