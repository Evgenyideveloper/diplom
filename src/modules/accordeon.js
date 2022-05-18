
const accordeon =()=>{
	const accordeon = document.querySelector('.accordeon');
	const accordeonElement = accordeon.querySelectorAll('.element');
	const accordeonContent = accordeon.querySelectorAll('.accordeon .element-content');
	
	accordeon.addEventListener('click', (e)=>{		
		if(e.target.closest('.element')){
		
		const tabBtn = e.target.closest('.element');
			accordeonElement.forEach((item, index)=>{
				if(item === tabBtn){
					item.classList.add('active');
					accordeonContent[index].style.display = 'block';
				}else{
					item.classList.remove('active');
					accordeonContent[index].style.display = 'none';
				}
				
			})
		}
	});	
	
}

export default accordeon