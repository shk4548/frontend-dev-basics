var tabBox = {
	onWindowLoad: function(){
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		
		var liTabs = ul.getElementsByTagName("li");
		for(var i = 0; i < liTabs.length; i++){
			liTabs[i].addEventListener("click",this._onTabClicked);
			console.log(this + " 아아아");

		}

	},
	_onTabClicked: function(){
		//unselect
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length === 1) && (lisSelected[0].className=""); 
		
		//select
		console.log(this + " 셀렉티드");

		this.className = 'selected';
	},
	init: function(){
		window.addEventListener('load', this.onWindowLoad.bind(this)); // this -> tabbox 
				console.log("--------");
				console.log(this);
				console.log("--------");

	}
}