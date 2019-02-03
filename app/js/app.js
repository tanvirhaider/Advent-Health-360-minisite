



function openURL (url,trackingString) {
	window.open(url);
	gtag('event', trackingString);
	console.log("tracking string: ",trackingString);
}

function init () {

	var menuStats = false;

	var mBtn = document.getElementById("menuicon");
	var cBtn = document.getElementById("closeBtn");
	var heroPlayAllBtn = document.getElementById("hero-play-all");
	var bottomPageSweeps = document.getElementById("bottom-sweeps");
	var bottomclientClickOut = document.getElementById("bottom-client");
	var ddclient = document.getElementById("dropdown-client");
	var ddsweeps = document.getElementById("dropdown-sweeps");
	var ddlogo = document.getElementById("dropdown-logo");
	var hlogo = document.getElementById("hero-logo");
	var hlink = document.getElementById("home-link");
	

	ddclient.addEventListener("click", function() {openURL (siteData.clientURL, "client-logo");});

	ddlogo.addEventListener("click", function() {openURL (siteData.clientURL, "client-logo");});

	hlogo.addEventListener("click", function() {openURL (siteData.clientURL, "client-logo");});

	hlink.addEventListener("click", function() {openURL (siteData.clientURL, "client-logo");});

	ddsweeps.addEventListener("click", function() {openURL (siteData.sweepsURL, "open-sweeps");});

	bottomclientClickOut.addEventListener("click", function() {openURL (siteData.clientURL, "client-logo");});

	heroPlayAllBtn.addEventListener("click", function() {openURL(siteData.vimeoAlbumURL, "play-all");});

	bottomPageSweeps.addEventListener("click", function() {openURL (siteData.sweepsURL, "open-sweeps");});

	cBtn.addEventListener("click", function() { showHideDD ("hide");});


	mBtn.addEventListener("click", function() {
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
		var vidIndex = Number(event.target.dataset.indexNumber);
		var vidURL = siteData.vimeoURLlist[vidIndex];
		showHideDD ("hide");
		openURL (vidURL, "vid-" + vidIndex);
		
	}

	function showHideDD ( whichOne ) {
		if (whichOne == "show") {
			document.getElementById("dropdown").style.visibility = "visible";
			document.getElementById("closeBtn").style.display = "block";
			menuStats = true;
			gtag('event', 'show-menu');
		}
		else {
			document.getElementById("dropdown").style.visibility = "hidden";
			document.getElementById("closeBtn").style.display = "none";
			menuStats = false;
			gtag('event', 'hide-menu');
		}
	}

}



init();

