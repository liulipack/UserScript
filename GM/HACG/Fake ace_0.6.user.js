// ==UserScript==
// @name         HACG_Fake ace
// @name:zh-CN   琉璃神社_伪大佬
// @description  替换神社等级图标。
// @version      0.6
// @author       LiuliPack
// @namespace    https://github.com/liulipack/UserScript
// @license      WTFPL
// @match        https://www.hacg.me/wp/bbs/*
// @match        https://www.hacg.cat/wp/bbs/*
// @updateURL    https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/HACG/Fake%20ace_latest.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/HACG/Fake%20ace_latest.user.js
// @run-at       document-body
// @grant        GM_addStyle
// ==/UserScript==

'use strict';

// 基础参数
// 换成你的昵称，注意与显示名称区分
let nsername = 'lpofficial';

// 替换换等级图标和图标颜色
document.querySelectorAll('div[data-mention="'+nsername+'"] .author-rating-full').forEach((ele) => {
    ele.innerHTML = '<i class="fas fa-trophy"></i>';
    ele.style.color = '#00bbfa';
});