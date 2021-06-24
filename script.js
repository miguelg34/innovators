$(function(){
	var images=[
		"img/martin1.jpg",
		"img/martin2.jpg",
		"img/martin3.jpg"
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