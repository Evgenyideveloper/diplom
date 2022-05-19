
const uslugi =()=>{
	const modalCallback = document.querySelector('.modal-callback');
	const modalClose = modalCallback.querySelector('.modal-close');
	const overlay = document.querySelectorAll('.modal-overlay');
	const elements = document.querySelectorAll('.services-elements .element .absolute');
	const buttonService = document.querySelector('.button-services');
	
	elements.forEach((item)=>{
		item.addEventListener('click', ()=>{
			e.preventDefault();
			overlay.forEach((item)=>{
				item.style.display = 'block';
			})			
				modalCallback.style.display = 'block';				
		})
		
	})	

	buttonService.addEventListener('click', ()=>{
		e.preventDefault();
		overlay.forEach((item)=>{
				item.style.display = 'block';
			})			
				modalCallback.style.display = 'block';
	});
}

export default uslugi