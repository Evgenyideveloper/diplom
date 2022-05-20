const sendForm = () =>{
    const form = document.getElementById('form1');
	
	
    const statusBlock = document.createElement('div');
    const loadText = 'загрузка...';
    const errorText = 'ошибка...';
    const successText = 'Спасибо! наш менеджер с вами свяжется!'; 
	
 
   const sendData = (data) =>{
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
    } 

	form.addEventListener('submit', (e)=>{
		e.preventDefault()
		
		const formElements = form.querySelectorAll('input');
		const formData = new FormData(form)
		const formBody = {}
		
		
		statusBlock.textContent = loadText;
		form.append(statusBlock);
		
			formData.forEach((val, key) => {
				formBody[key] = val;
			});			
		
		//console.log('submit');		
		
		
		sendData(formBody)
                .then(data =>{               
                console.log(data);
				statusBlock.textContent = successText;
            })
			.catch(error =>{
                statusBlock.textContent = errorText;
            })
			.finally(()=>{
				form.reset()
			})
	}); 
 
}

export default sendForm