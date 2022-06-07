// ==UserScript==
// @name         Uni_Open-reg Check
// @name:zh-CN   通用_开放注册检测
// @description  通过比对元素文本判断，检测开放注册状态。
// @version      0.2
// @author       LiuliPack
// @namespace    https://github.com/liulipack/UserScript
// @license      WTFPL
// @match        https://proxyrarbg.org/login
// @match        https://v2.uploadbt.com/?r=invite
// @match        https://nyaa.si/register
// @match        https://t66y.com/register.php
// @updateURL    https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/Uni/Open-reg%20Check_latest.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/Uni/Open-reg%20Check_latest.user.js
// @run-at       document-end
// @grant        GM_notification
// ==/UserScript==

'use strict';

// 基础参数
let cfg = {
    "站点域名": ["元素", "元素内容", "延迟"],
    "proxyrarbg.org": [".lista-rounded td[align=\"justify\"] div:nth-child(9)", "Registrationsarenowclosed!", "0"],
    "v2.uploadbt.com": [".badge", "已占用", "0"],
    "nyaa.si": ["pre", "Registrationistemporarilyunavailable", "0"],
    "t66y.com": ["tr.tr3:nth-child(7) th", "邀請註冊碼*本站開啟邀請註冊,請填寫邀請碼!", "0"],
},
    loc = {
        "zh-CN": {
            "Open": "开放注册",
            "Open_Notif": " 开放注册了！",
            "UnOpen": "无法注册"
        },
        "zh-HK": {
            "Open": "開放注冊",
            "Open_Notif": " 開放注冊了！",
            "UnOpen": "無法注冊"
        },
        "zh-TW": {
            "Open": "開放注冊",
            "Open_Notif": " 開放注冊了！",
            "UnOpen": "無法注冊"
        },
        "en-US": {
            "Open": "Can register",
            "Open_Notif": " can register now!",
            "UnOpen": "Can't register"
        }
    },
    domain = window.location.host,
    title = document.title,
    lang = navigator.language;

// 未定义语言转换为英语
if(!lang.match(/(zh|en)-(CN|HK|TW|US)/)) {
    lang = 'en-US'
}

// 判断
setTimeout(function() {
    if(document.querySelector(cfg[domain][0]).textContent.replace(/\s/g, '') === cfg[domain][1]) {
        document.title = '[' + loc[lang].UnOpen + ']' + title;
    }else {
        document.title = '[' + loc[lang].Open + ']' + title;
        GM_notification(domain + loc[lang].Open_Notif);
    }
},cfg[domain][2]);