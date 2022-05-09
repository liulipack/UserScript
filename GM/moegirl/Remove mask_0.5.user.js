// ==UserScript==
// @name         MoeGirl_Remove mask
// @name:zh-CN   萌百_去黑幕
// @namespace    https://github.com/liulipack/UserScript
// @version      0.5
// @description  去除萌娘百科和 H 萌娘的黑幕。
// @author       LiuliPack
// @include      /(m\.|www\.|zh\.|mzh\.)?(h)?moegirl(\.com|\.org\.cn)/
// @grant        GM_addStyle
// @updateURL    https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/moegirl/Remove%20mask_latest.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/moegirl/Remove%20mask_latest.user.js
// @license      WTFPL
// ==/UserScript==

'use strict';

// 修改样式
GM_addStyle('.heimu{color: #fff}.heimu a,.mw-body a.external:visited{color: #5b84c8!important}');

// 去除`title`属性。
document.querySelectorAll('.heimu').forEach((ele) => {
    ele.removeAttribute('title');
});