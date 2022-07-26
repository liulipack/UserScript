// ==UserScript==
// @name         Uni_Porn blocker
// @name:zh-CN   通用_敏感内容屏蔽
// @description  通过关键词匹配域名、网站标题和网站内容，阻止访问色情网站。
// @version      0.3
// @author       LiuliPack
// @namespace    https://github.com/liulipack/UserScript
// @license      WTFPL
// @match        *://*/*
// @exclude      https://*.gravatar.com/*
// @exclude      https://*.java.com/*
// @run-at       document-body
// @grant        GM_addStyle
// ==/UserScript==

'use strict';

// 参数
let cfg = {
    "match": {
        "content": false,
    },
    "show": {
        "title": "收手吧，外面全是成龙！",
        "icon": "data:;base64,iVBORw0KGgo=",
        "style": "html,body{background:#303030}"
    },
    "lists": ["18", "69", "asmr", "adult", "av", "bdsm", "ero", "hani", "hentai", "jav", "porn", "sex", "sukebei", "xxx", "灵梦御所", "琉璃神社", "绅士", "色情", "音声"]
};

// 执行屏蔽
function blocker(Method, Word) {
    console.log('敏感内容屏蔽 > ' + Method + '中发现关键词“' + Word + '”，已将其屏蔽。');
    document.body.innerHTML = '';
    GM_addStyle(cfg.show.style);
    document.querySelector("link[rel*=icon]").href = cfg.show.icon;
    document.title = cfg.show.title;
    window.stop();
};

// 检测
cfg.lists.filter(word => {
    // 域名
    if(location.host.match(word) !== null) {
        blocker('域名', word);
    }
    // 标题
    if(document.title.toLowerCase().match(word) !== null) {
        blocker('标题', word);
    }
    // 网页内容
    if(cfg.match.content && document.body.textContent.toLowerCase().match(word) !== null) {
        blocker('网页内容', word);
    }
});