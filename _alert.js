window.alert=alert;
function alert(data) {
	var a=document.createElement("div"),p=document.createElement("p"),btn=document.createElement("div"),textNode=document.createTextNode(data?data:""),btnText=document.createTextNode("确 定");
	css(a,{"position":"fixed","left":"0","right":"0","top":"20%","width":"100px","margin":"0 auto","background-color":"#f00","font-size":"20px","text-align":"center"});
	css(btn,{"background":"blue"});
	p.appendChild(textNode);
	btn.appendChild(btnText);
	a.appendChild(p),a.appendChild(btn);
	document.getElementsByTagName("body")[0].appendChild(a);
	btn.onclick=function {
		a.parentNode.removeChild(a);
	}
}
function css(trt,coj) {
	var str=trt.getAttribute("style")?trt.getAttribute("style"):"";
	for(var i in coj)
		str+=i+":"+coj[i]+";";
	targetObj.style.cssText=str;
}
