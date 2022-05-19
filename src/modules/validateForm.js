const validateForm =()=>{
	
	const typeText = document.querySelector('.form-name');	
			typeText.addEventListener('input', (e)=>{
				e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s]/, "")
			});
			
	const typeTel = document.querySelector('.form-phone');	
			typeTel.addEventListener('input', (e)=>{
				e.target.value = e.target.value.replace(/[^+0-9]/, "")
			});	
}

export default validateForm