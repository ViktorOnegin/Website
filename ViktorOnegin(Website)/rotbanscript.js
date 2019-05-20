window.onload = rotate;

var adImages = new Array("images/pilt1.jpg", "images/pilt2.jpg", "images/pilt3.jpg", "images/pilt4.jpg", "images/pilt5.jpg", "images/pilt6.jpg");
var thisAd = 0;

function rotate() {
	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	
	document.getElementById("adBanner").src = adImages[thisAd];
	
	setTimeout("rotate()", 3 * 1000)
}