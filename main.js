function cat(){
	var change = document.getElementById('cat');
	$.getJSON("https://random.cat/meow").then(function(data) {
		console.log(data.file);
		change.innerHTML="<img src=\""+data.file+"\">";
	});
}
