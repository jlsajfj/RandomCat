var a,b,c,h=$(document).height()*7/8,w=$(document).width()*15/16;
var change = document.getElementById('cat');
function cat(){
			$.getJSON("http://random.cat/meow").then (function (data){
				//change.innerHTML="<img src=\""+data.file+"\">";
				var img = new Image();
				img.onload=function(){
					a=h/this.height;
					b = a*this.width;
					c = h;
					var temp = "<img src=\""+this.src+"\" height=\""+c+"\" width=\""+b+"\">";
					//console.log(temp);
					change.innerHTML=temp;
				}
				img.src=data.file;
			});
/*var xhr = createCORSRequest('GET', 'http://random.cat/meow');
	if (!xhr) {
		throw new Error('CORS not supported');
	}else{
		console.log(xhr);
		window.setTimeout(function(){
		console.log(xhr.response);
		if(xhr.statusText==""){ console.log(1);
			change.innerHTML="Please Enable Scripts<br /><img src=\"sheild.png\"><br /><img src=\"scripts.png\">";
		}
		else change.innerHTML="<img src=\""+xhr.response[0].file+"\">";
		xhr.send();
		},200);
	}*/
				
/*
var data = $.getJSON("http://random.cat/meow")
	console.log(data);
	if(data.readyState==0) console.log(7);
		else{
		console.log(data.responseText);
		change.innerHTML="<img src=\""+data.responseText.file+"\">";}*/
/*$.ajax({	
  type: 'GET',
	  url: 'http://random.cat/meow',
	  contentType: 'text/plain',

	  xhrFields: {
		// The 'xhrFields' property sets additional fields on the XMLHttpRequest.
		// This can be used to set the 'withCredentials' property.
		// Set the value to 'true' if you'd like to pass cookies to the server.
		// If this is enabled, your server must respond with the header
		// 'Access-Control-Allow-Credentials: true'.
		withCredentials: false
	  },

	  headers: {
		// Set any custom headers here.
		// If you set any non-simple headers, your server must include these
		// headers in the 'Access-Control-Allow-Headers' response header.
	  },

	  success: function(data) {
		  console.log(data.file);
		  change.innerHTML="<img src=\""+data.file+"\">";
	  },

	  error: function() {
		// Here's where you handle an error response.
		// Note that if the error was due to a CORS issue,
		// this function will still fire, but there won't be any additional
		// information about the error.
	  }
	});*/
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}
