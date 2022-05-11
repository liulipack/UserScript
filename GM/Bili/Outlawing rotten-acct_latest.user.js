// ==UserScript==
// @name         Bili_Outlawing rotten-acct
// @name:zh-CN   哔哩哔哩_取缔营销号
// @description  基于程序员鱼皮的打击营销号(https://github.com/liyupi/rubbish-yingxiaohao)，做的油猴版本。
// @version      0.2
// @author       LiuliPack
// @namespace    https://github.com/liulipack/UserScript
// @license      WTFPL
// @match        https://www.bilibili.com/video/*
// @updateURL    https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/Any/Porn%20blocker_latest.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/liulipack/UserScript@main/GM/Any/Porn%20blocker_latest.user.js
// @run-at       document-start
// @grant        GM_addStyle
// @require      https://cdn.jsdelivr.net/gh/liyupi/rubbish-yingxiaohao/data.js
// ==/UserScript==

'use strict';

// 基础参数
let cfg = {
    "list": ["1599091972", "1626919468", "72273756", "627639115", "152315179", "276035104", "98655217", "1896611620"]
},
    uid = $$('.username').href.split('/')[3],
    nick = $$('.username').innerText.replace(" ", "");

function $$(ele) {
    return document.querySelector(ele)
};

// 播放提醒音
function PlayAudio() {
    let iframe = document.createElement('audio');
    iframe.src = 'https://cdn.jsdelivr.net/gh/liyupi/rubbish-yingxiaohao/audio.mp4';
    iframe.autoplay = true;
    iframe.loop = true;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
};

// 正义执行！
var RighteousExecutions = new function() {

	this.Bili = function() {
        GM_addStyle(".up-info-v1 .btn-panel .not-follow{background:#f5222d;color:#fff}.manuscript-report{font-size:150%}.video-toolbar-v1 .toolbar-left>span{font-size:150%; color:#f5222d}");
        $$('.follow-btn').innerText = "我是营销号";
        $$('.toolbar-left').innerHTML = "<span>这是一个光荣的营销号，随手举报传递正能量👉</span>";
        PlayAudio();
	};
};

// 等待 5 秒，开始检测。
setTimeout(() => {
    let i = 0;
    // 匹配 uid
    do {
        i++;
        if(uid === cfg.list[i]) {
            RighteousExecutions.Bili();
            console.log('取缔营销号 > 匹配到 uid `' + cfg.list[i] + '`。')
        }
    } while (i <= cfg.list.length - 1);
    i = 0;
    // 匹配昵称
    do {
        i++;
        if(nick === initBlackList[i]) {
            RighteousExecutions.Bili();
            console.log('取缔营销号 > 匹配到昵称`' + initBlackList[i] + '`。')
        }
    } while (i <= initBlackList.length - 1);
}, 5000);