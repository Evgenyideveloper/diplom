
const slider =()=>{
	const topSlider = document.querySelector('.top-slider');
	const slides = document.querySelectorAll('.item');
	
	let currentSlide = 0;
	
	const autoSlide = () =>{
		slides[currentSlide].style.display = 'none';
		currentSlide++;
		if(currentSlide >= slides.length){
			currentSlide = 0;
		}
		slides[currentSlide].style.display = 'block';
	}
	
	const startSlide = () =>{
		setInterval(autoSlide, 3000);
	}
	//startSlide();

}

export default slider