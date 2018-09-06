var images = ["../images/elizapic.jpg","../images/darwinpic.jpg","../images/debbiepic.jpg","../images/donniepic.jpg","../images/nigelpic.jpg","../images/mariannepic.jpg"];

var imagesLength = images.length -1;

var currentpic = 0;

function changePic (x) {
	currentpic += x;
		if(currentpic > imagesLength){
			currentpic = 0;
		}

		if(currentpic < 0){
			currentpic = imagesLength;
		}

		document.getElementById('image').src = images[currentpic];
		}