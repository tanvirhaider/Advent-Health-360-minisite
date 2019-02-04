# Advent Health Virtual Race Day Experience

## Updating Social Sharing Options
```
	<!-- Twitter elements -->
	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="AdventHealth | Virtual Race Day Experience">
	<meta name="twitter:url" content="http://www.DaytonaRaceDay.com">
	<meta name="twitter:site" content="">

	<!-- Open Graph elements  -->
	<meta property="og:site_name" content="DaytonaRaceDay">
	<meta property="og:title" content="AdventHealth | Virtual Race Day Experience">
	<meta property="og:description" content="">
	<meta property="og:type" content="website">
	<meta property="og:image" content="">
	<meta property="og:url" content="http://www.DaytonaRaceDay.com">
```

please update the twitter and Open Graph data at the "head" of the index.html

## Updating URLS

```
	ar siteData = {
		version: "iframe",		// "iframe", "standard"	
		platform: "youtube",  	// "youtube", "vimeo"
		vimeoURLlist: [
			"https://vimeo.com/314887001",	// garage
			"https://vimeo.com/314890554",	// fanzone
			"https://vimeo.com/314891691",	// driver introductions
			"https://vimeo.com/314891724",	// parade lap
			"https://vimeo.com/314891741",	// start your engines
			"https://vimeo.com/314891771",	// pit road
			"https://vimeo.com/314891809",	// hot pass
			"https://vimeo.com/314891829"	// victory lane
		],
		youtubeURLlist: [
			"QKm-SOOMC4c",	// garage
			"ywoe0obYaLU",	// fanzone
			"_Uf0USAW-U8",	// driver introductions
			"-xNN-bJQ4vI",	// parade lap
			"qaTvddhJtTA",	// start your engines
			"HqmBa8FPMx8",	// pit road
			"Z3ILot5QJzM",	// hot pass
			"12otR342ijc"	// victory lane
		],
		youtubePlayListURL: "https://vimeo.com/manage/albums/5729898",
		vimeoAlbumURL: "https://vimeo.com/manage/albums/5729898",
		clientURL: "https://www.adventhealth.com",
		sweepsURL: "http://YourChampionforHealth.com"
	} 
```

please update the siteData javacript object located in the "head" of the index.html file

## Updating Google Analytics

```
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-125434262-2"></script>
	<script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-125434262-2'); </script>
```
please update the UA-XXXXXXXXX value on both of the scripts (you can find this in the "head" of the index.html)


## Authors

* Designer: Aaron Reed @ theGoCo.com
* Developer: Tanvir Haider @ Willow Studios - https://willow.studio/




