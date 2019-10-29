/*
 * @Author: dhl
 * @Date:   2019-03-16 21:14:45
 * @Last Modified by:   dhl
 * @Last Modified time: 2019-03-17 17:27:27
 */
var timeId = null;
var step = 100;
function animate(element, target) {
	//保证始终有一个定时器执行
	if (element.timeId) {
		clearInterval(element.timeId);
		element.timeId = null;
	}
	element.timeId = setInterval(function() {
		var current = element.offsetLeft;

		//判断移动的方向是正还是负
		if(target < current) {

			step = -Math.abs(step);

		}else {

			step = Math.abs(step);
		}
		//如果当前位置和要移动目标位置相减距离如果大于 每步移动的距离 那么就执行动画
		//否则不执行动画
		if (Math.abs(current-target) < Math.abs(step) ) {
			current = target;
			element.style.left = current + "px";
			clearInterval(element.timeId);
		} else {
			current += step;
		}
		element.style.left = current + "px";
	}, 30);
}