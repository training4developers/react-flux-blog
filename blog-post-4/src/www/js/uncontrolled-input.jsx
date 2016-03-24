(function() {
	
	"use strict";

	document.getElementsByTagName("button")[0].addEventListener("click", function() {

	  var div = document.createElement("div");
	  div.textContent = "Value Attribute of Input: " + document.querySelector("[name='message']").getAttribute("value");
	  document.getElementById("output").appendChild(div);

	});

})();
