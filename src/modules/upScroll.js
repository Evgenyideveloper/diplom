
const upScroll =()=>{	
	const up = document.querySelector('.up');	
	
	let fullHeight = document.body.scrollHeight; 
	up.style.display = 'none';
	window.addEventListener('scroll', ()=>{
		
		if(window.pageYOffset >= 2550){
			up.style.display = 'block';
		}else{
			up.style.display = 'none';
		}	
	});
	
	up.addEventListener("click", () => {
		window.scrollTo({
		top: 0,
		behavior: "smooth"
		});		
	});
	
	
}

export default upScroll