

var vimeoURLlist = [
	"https://vimeo.com/314887001",
	"https://vimeo.com/314890554",
	"https://vimeo.com/314891691",
	"https://vimeo.com/314891724",
	"https://vimeo.com/314891741",
	"https://vimeo.com/314891771",
	"https://vimeo.com/314891809",
	"https://vimeo.com/314891829"
]

function init () {
	var mBtn = document.getElementById("menuicon");
	var menuStats = false;
	mBtn.addEventListener("click", function() {
		console.log("yo MTV");
		if (menuStats == false) {
			document.getElementById("dropdown").style.visibility = "visible";
			menuStats = true;
		}
		else {
			document.getElementById("dropdown").style.visibility = "hidden";
			menuStats = false;
		}
		
	});


	for ( var i = 0; i < 8; i++) {
		var currentThumb = document.getElementById("item-" + i);
		currentThumb.addEventListener("click", whenThumbClicked);
	}

	function whenThumbClicked (event) {
		//console.log(event.target);

		console.log(event.target.dataset.indexNumber);
		var vidIndex = Number(event.target.dataset.indexNumber);
		var vidURL = vimeoURLlist[vidIndex];

		window.open(vidURL);
		
	}

}







































window.onload = function() {
	init();
};