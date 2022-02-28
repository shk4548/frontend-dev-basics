var imageViewer = {


	init: function() {
		$(function(){
			$('#btn-change, .image-viewer img').click(this._change.bind(this));
	
			this._change();
			
			$('#btn-slideshow').click(this._slide.bind(this));

			
		}.bind(this));
	},
	
	_isGood : false,
	
	_slide : function(){

		console.log("========================_slide");
		console.log(typeof(this._stopImage));
		console.log("========================");


		this._isGood ?  this._stopImage() : this._slideImage() ;
		this._isGood = !this._isGood;

	},

	_slideImage : function(){
		$('#btn-slideshow').text('슬라이드 쇼 중지!');
		console.log("========================slideImage");
		console.log(this);
		console.log("========================");
		this._timeSet = setInterval(this._change.bind(this) ,1000);
		// window 객체 
	},

	_stopImage : function(){
		$('#btn-slideshow').text('슬라이드 쇼 시작!');

		clearInterval(this._timeSet);
	},
	
	_change: function() {
		var index = Math.floor(Math.random() * this._images.length);
		console.log("======================== change");
		console.log(this);
		console.log("========================");
		 $(".image-viewer img").attr({
		  	alt: this._images[index].name,
		  	src: 'images/' + this._images[index].file
			 });
	},

	_timeSet: null,

	_images: [
		{
			name: "국화",
			file: "Chrysanthemum.jpg"
		},
		{
			name: "사막",
			file: "Desert.jpg"
		},
		{
			name: "해파리",
			file: "Jellyfish.jpg"
		},
		{
			name: "코알라",
			file: "Koala.jpg"
		},
		{
			name: "등대",
			file: "Lighthouse.jpg"
		},
		{
			name: "펭귄",
			file: "Penguins.jpg"
		},
		{
			name: "툴립",
			file: "Tulips.jpg"
		}]
}