// ==UserScript==
// @name         DLSite_Remove search-mask
// @name:zh-CN   DLSite_去搜索遮罩
// @description  去除 DLSite 在激活搜索框时的遮罩。
// @version      0.1
// @author       LiuliPack
// @namespace    https://github.com/liulipack/UserScript
// @license      WTFPL
// @match        https://www.dlsite.com/*
// @updateURL    https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/DLSite/Remove%20mask_latest.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/DLSite/Remove%20mask_latest.user.js
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

'use strict';

// 修改样式
GM_addStyle('.globalSearchBg.active{display:none}');