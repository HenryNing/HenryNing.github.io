function _alert(data, callback) {
	var alert_bg = document.createElement('div');
	alert_box = document.createElement('div'),
	alert_text = document.createElement('div'),
	alert_btn = document.createElement('div'),
	textNode = document.createTextNode(data ? data : ''),
	btnText = document.createTextNode('确 定');
	css(alert_bg, {'position': 'fixed','top': '0','left': '0','right': '0','bottom': '0','background-color': 'rgba(0, 0, 0, 0.1)','z-index': '999999999'});
	css(alert_box, {'width': '270px','max-width': '90%','font-size': '16px','text-align': 'center','background-color': '#fff','border-radius': '15px','position': 'absolute','top': '50%','left': '50%','transform': 'translate(-50%, -50%)'});
	css(alert_text, {'padding': '10px 15px','border-bottom': '1px solid #ddd'});
	css(alert_btn, {'padding': '10px 0','color': '#bb00bb','font-weight': '600','cursor': 'pointer'});
	alert_text.appendChild(textNode);
	alert_btn.appendChild(btnText);
	alert_box.appendChild(alert_text);
	alert_box.appendChild(alert_btn);
	alert_bg.appendChild(alert_box);
	document.getElementsByTagName('body')[0].appendChild(alert_bg);
	alert_btn.onclick = function() {
		alert_bg.parentNode.removeChild(alert_bg);
		if (typeof callback === 'function')
			callback();
	}
}
function css(targetObj, cssObj) {
	var tg = targetObj.getAttribute("style");
	var str = tg ? tg : '';
	for (var i in cssObj)
		str += i + ':' + cssObj[i] + ';';
	targetObj.style.cssText = str;
}
