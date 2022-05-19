
const modal =()=>{

    const modalCallback = document.querySelector('.modal-callback');
	const modalClose = modalCallback.querySelector('.modal-close');
	const overlay = document.querySelectorAll('.modal-overlay');
	const header = document.querySelector('.header');
	const body = document.querySelector('body');
	
	overlay.forEach((item)=>{
		header.addEventListener('click', (e)=>{
			
			if(e.target.classList.contains('callback-btn')){
				e.preventDefault();	
				item.style.display = 'block';
				modalCallback.style.display = 'block';			
			}
		})
		
	})
	
	
	body.addEventListener('click', (e)=>{		
		if(e.target.closest('.modal-overlay')){			
			e.target.style.display = 'none';
			modalCallback.style.display = 'none';			
		}	
	}) 
	
	
	 modalClose.addEventListener('click', ()=>{
		modalCallback.style.display = 'none';
		overlay.forEach((item)=>{
			item.style.display = 'none';
		})
		
	})  
    
}

export default modal