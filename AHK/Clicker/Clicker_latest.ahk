; AHK 脚本语言鼠标连点器。作者 LiuliPack。采用 WTFPL 授权。

; 配置。需要就改为 `true`，不要就维持 `false`
Jitter := false ; 是否启动抖动
RClick := false ; 是否右键

SetMouseDelay, -1

^!s:: ; Ctrl+Alt+S(tart) 开始
loop {

	if(Jitter = true) {
		Random, JitterX, -3, 3 ; X、Y 轴随机抖动
		Random, JitterY, -3, 3
		MouseMove, %JitterX%, %JitterY%, 0, R ; 抖动
	} ; 如果启用抖动点击

	Random, cooldown, 0, 200 ; 等待时间
	sleep cooldown ; 等待

	if(RClick = true) {
		Click right
	} else {
		Click
	} ; 点击

	if(Stop = true) {
		Stop = false
		break
	} ; 停止
}
return

^!e:: Stop := true ; Ctrl+Alt+E(nd) 停止