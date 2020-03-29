// adding event listener for scrolling window than class will ass and remove

window.addEventListener("scroll", ()=> {
			const scrolled = window.scrollY;
			var mainnav = document.getElementById('myHeader');

			if (scrolled >= 60){
				 mainnav.classList.add("colorBg");

			// (scrolled < 100) or use this one also than remove the class wich one you add from css OR the down one
			// the jquery hasClass here is replaceing by plain js classList.contains("here is class name")	  
			} else if(mainnav.classList.contains("colorBg")) { 
				mainnav.classList.remove("colorBg");
			}
		})





