var imageArray = new Array();
imageArray[0] = "/img/404.coffee.not.found.jpg";
imageArray[1] = "/img/404.loli.not.found.png";

function doIt() {
	var rand = Math.floor(Math.random() * 2); //Generating a random number between 0 and 3 here in your case you can replace 4 with 11 if you have 10 images
	var imgPath = "<img src='" + imageArray[rand] + "' class='img-responsive img-rounded'  />";
	document.getElementById("image").innerHTML = imgPath;
}
doIt();
