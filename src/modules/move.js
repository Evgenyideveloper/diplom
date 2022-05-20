
const move =()=>{	

	const topMenu = document.querySelector(".top-menu");
	
	topMenu.addEventListener("click", (event) => {
		const target = event.target;
		if (target.matches("a")) {
			event.preventDefault();
			const thisEl = document.querySelector(target.getAttribute("href"));
			console.log(target.getAttribute("href"));
			console.log(thisEl);
			thisEl.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	}); 
  
}

export default move