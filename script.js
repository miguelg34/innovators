$(function(){
	var images=[
		"img/miguel1.gif",
		"img/miguel2.gif",
		"img/miguel3.gif",
		"img/miguel4.gif"
	];
	var galleryImage=$("img");
	var i=0;
	setInterval(function(){
		i=(i+1)%images.length;
		galleryImage.fadeOut(function(){
			galleryImage.attr("src", images[i]);
			galleryImage.fadeIn();
		}
			);
		
	},2000)

});