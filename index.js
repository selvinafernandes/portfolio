function toggleNav(toggleMenu){

    var menu = document.getElementsByClassName('navigation');
        toggleMenu.classList.toggle("toggled");

    var nav = document.getElementsByClassName('navigation')[0];
        nav.classList.toggle("navigation__open");

    var navItem = document.getElementsByClassName('navigation__menu--item');
	    for (var i = 0; i < navItem.length; i++){
		    navItem[i].addEventListener("click",function(evt){
		    	if(nav.classList.contains("navigation__open")){
		    		setTimeout(function() {
		    			toggleNav(toggleMenu);
		    		},1000);	
		    	}
		    });
		}
};

// function scrollToBlock(x){
// 	console.log(nav);
// 	if (nav.classList.contains('navigation__open')){
// 		console.log("hello");
// 	}
// }   













