

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
	var cBtn = document.getElementById("closeBtn");
	var heroPlayAllBtn = document.getElementById("hero-play-all");
	var bottomPageSweeps = document.getElementById("bottom-sweeps");
	var bottomclientClickOut = document.getElementById("bottom-client");
	var ddclient = document.getElementById("dropdown-client");
	var ddsweeps = document.getElementById("dropdown-sweeps");
	var ddlogo = document.getElementById("dropdown-logo");

	ddclient.addEventListener("click", function() {
		console.log("dropdown client click out");
	});

	ddlogo.addEventListener("click", function() {
		console.log("dropdown logo");
	});

	ddsweeps.addEventListener("click", function() {
		console.log("dropdown sweeps");
	});

	bottomclientClickOut.addEventListener("click", function() {
		console.log("bottom of the page client click out");
	});

	heroPlayAllBtn.addEventListener("click", function() {
		console.log("hero play all");
	});

	bottomPageSweeps.addEventListener("click", function() {
		console.log("bottom of the page sweeps");
	});

	var menuStats = false;

	cBtn.addEventListener("click", function() {
		showHideDD ("hide");
	});


	mBtn.addEventListener("click", function() {
		//console.log("yo MTV");
		if (menuStats == false) {
			showHideDD ("show");
		}
		else {
			showHideDD ("hide");
		}
		
	});


	for ( var i = 0; i < 8; i++) {
		var currentThumb = document.getElementById("item-" + i);
		currentThumb.addEventListener("click", whenThumbClicked);
	}

	function whenThumbClicked (event) {
		//console.log(event.target);

		//console.log(event.target.dataset.indexNumber);
		var vidIndex = Number(event.target.dataset.indexNumber);
		var vidURL = vimeoURLlist[vidIndex];
		showHideDD ("hide");
		window.open(vidURL);
		
	}

	function showHideDD ( whichOne ) {
		if (whichOne == "show") {
			document.getElementById("dropdown").style.visibility = "visible";
			document.getElementById("closeBtn").style.display = "block";
			menuStats = true;
		}
		else {
			document.getElementById("dropdown").style.visibility = "hidden";
			document.getElementById("closeBtn").style.display = "none";
			menuStats = false;
		}
	}

}







































window.onload = function() {
	init();
};