



function openURL (url,trackingString) {
	window.open(url);
	gtag('event', trackingString);
	console.log("tracking string: ",trackingString);
}



function createOmniVirtIframe (videoFile, index) {
	console.log("create omnivirt video");

	var iframeContainer = document.getElementById("vid-overlay");
	iframeContainer.style.display = "block";
	var iframe = document.createElement('iframe');
	iframe.setAttribute('id', "ado-" + videoFile );
	iframe.setAttribute('frameborder', "0");
	iframe.setAttribute('webkitAllowFullScreen',"1");
	iframe.setAttribute('mozallowfullscreen',"1");
	iframe.setAttribute('allowFullScreen',"1");
	iframe.setAttribute("src","//www.vroptimal-3dx-assets.com/content/"+videoFile+"?player=true&autoplay=true&referer=" + encodeURIComponent(window.location.href));
	iframeContainer.appendChild(iframe);


	var iframeBG = document.createElement("iframeBG");
	iframeBG.className += "iframeBG-style";
	iframeContainer.appendChild(iframeBG);
	iframeContainer.addEventListener("click", closeIframe);

	var iframeCloseBtn = document.createElement("iframeCloseBtn");
	iframeCloseBtn.className += "closeBtn-style";
	iframeContainer.appendChild(iframeCloseBtn);
	iframeCloseBtn.addEventListener("click", closeIframe);

	function closeIframe (event) {
		var numberOfChildren = iframeContainer.childElementCount;
		console.log(numberOfChildren);

		for (var i = 0; i < numberOfChildren; i++) {
			var tempChild = iframeContainer.firstChild;
			iframeContainer.removeChild(tempChild);
			console.log(tempChild);
		}

		iframeContainer.style.display = "none";
	}

	OmniVirt.api.receiveMessage('loaded', function(type, data, iframe) { 
		if (iframe.attr('id') == 'ado-' + videoFile)   OmniVirt.api.sendMessage('cardboard', 'on', iframe); 
	});


}

function createYoutubeIframe (videoFile,index) {
	console.log(videoFile);

	var iframeContainer = document.getElementById("vid-overlay");

	iframeContainer.style.display = "block";

	var iframe = document.createElement('iframe');
	iframe.setAttribute('id', "youtube-iframe-" + index);
	iframe.setAttribute('frameborder', "0");
	iframe.setAttribute('allowfullscreen',"");
	iframe.setAttribute('allow',"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
	iframe.className += "youtube-iframe-style";
	iframe.src = 'https://www.youtube.com/embed/' + videoFile;
	iframeContainer.appendChild(iframe);

	var iframeBG = document.createElement("iframeBG");
	iframeBG.className += "iframeBG-style";
	iframeContainer.appendChild(iframeBG);
	iframeContainer.addEventListener("click", closeIframe);

	var iframeCloseBtn = document.createElement("iframeCloseBtn");
	iframeCloseBtn.className += "closeBtn-style";
	iframeContainer.appendChild(iframeCloseBtn);
	iframeCloseBtn.addEventListener("click", closeIframe);

	function closeIframe (event) {
		var numberOfChildren = iframeContainer.childElementCount;
		console.log(numberOfChildren);

		for (var i = 0; i < numberOfChildren; i++) {
			var tempChild = iframeContainer.firstChild;
			iframeContainer.removeChild(tempChild);
			console.log(tempChild);
		}

		iframeContainer.style.display = "none";
	}
}

function createVimeoIframe (videoFile, index) {

	console.log(videoFile);
	var iframeContainer = document.getElementById("vid-overlay");
	iframeContainer.style.display = "block";
	var iframe = document.createElement('iframe');
	iframe.setAttribute('id', "vimeo-iframe-" + index);
	iframe.setAttribute('frameborder', "0");
	iframe.setAttribute('allowfullscreen',"");
	iframe.setAttribute('webkitallowfullscreen',"");
	iframe.setAttribute('mozallowfullscreen',"");
	iframe.className += "vimeo-iframe-style";
	iframe.src = 'https://player.vimeo.com/video/' + videoFile;
	iframeContainer.appendChild(iframe);

	var iframeBG = document.createElement("iframeBG");
	iframeBG.className += "iframeBG-style";
	iframeContainer.appendChild(iframeBG);
	iframeContainer.addEventListener("click", closeIframe);

	var iframeCloseBtn = document.createElement("iframeCloseBtn");
	iframeCloseBtn.className += "closeBtn-style";
	iframeContainer.appendChild(iframeCloseBtn);
	iframeCloseBtn.addEventListener("click", closeIframe);

	function closeIframe (event) {
		var numberOfChildren = iframeContainer.childElementCount;
		console.log(numberOfChildren);

		for (var i = 0; i < numberOfChildren; i++) {
			var tempChild = iframeContainer.firstChild;
			iframeContainer.removeChild(tempChild);
			console.log(tempChild);
		}

		iframeContainer.style.display = "none";
	}
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

	heroPlayAllBtn.addEventListener("click", function() {
		if (siteData.platform == "youtube") {
			openURL(siteData.youtubePlayListURL, "play-all");
		}

		else if (siteData.platform == "vimeo") {
			openURL(siteData.vimeoAlbumURL, "play-all");
		}
	});

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
		var vidURL;
		
		showHideDD ("hide");

		if (siteData.platform == "youtube") {

			vidURL = siteData.youtubeURLlist[vidIndex];

			if (siteData.version == "iframe") {
				createYoutubeIframe (vidURL,vidIndex);
			}
			else {
				openURL ("https://www.youtube.com/watch?v=" + vidURL, "vid-" + vidIndex);
			}
		}
		else if (siteData.platform == "vimeo") {
			vidURL = siteData.vimeoURLlist[vidIndex];
			
			if (siteData.version == "iframe") {
				createVimeoIframe (vidURL,vidIndex);
			}
			else {
				openURL ("https://vimeo.com/" + vidURL, "vid-" + vidIndex);
			}
		}

		else if (siteData.platform == "omnivirt") {
			vidURL = siteData.omnivirtURLList[vidIndex];
			
			if (siteData.version == "iframe") {
				createOmniVirtIframe (vidURL,vidIndex);
			}
			else {
				openURL ("https://vimeo.com/" + vidURL, "vid-" + vidIndex);
			}
		}

		
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

