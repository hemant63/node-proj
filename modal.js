document.addEventListener('DOMContentLoaded',()=>{
    const modal = document.querySelector('.js-modal'),
    openModalBtn=document.querySelector('.js-show-modal'),
    closedModalBtns=document.querySelectorAll('.js-close-modal'),
    addButton=document.getElementById('btn'),
    inputValue=document.querySelectorAll('.input'),
    body=document.querySelector('body');
    var payload={}
    const closeModal=()=>{
        modal.classList.remove('modal--opened');
        body.classList.remove('overflowHidden');
        document.removeEventListener('keydown',handleEscClose);
    }
    const openModal=()=>{
        modal.classList.add('modal--opened');
        body.classList.add('overflowHidden');
        document.addEventListener('keydown',handleEscClose)
    }
    const handleEscClose=(event)=>{
        if(event.key === 'Escape'){
            closeModal();
        }
    };
    const handleChange=(e)=>{
        payload[e.target.name]=e.target.value;
    }
    const handleSubmit = ()=>{
        console.log(payload)
        if(JSON.stringify(payload) === "{}"){
            alert("Form cannot be empty")
        }else{
            fetch("http://localhost:5000/product",{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "Content-type":"application/json; charset=UTF-8"
                }
            })
            .then(res=>res.json())
            .then(response=> console.log(response))
            .catch(error => console.error("Error:", error));
            closeModal()
        }
    }
    if(modal){
        openModalBtn.addEventListener('click', openModal);
        inputValue.forEach((input)=>input.addEventListener('input',handleChange));
        addButton.addEventListener('click',handleSubmit)
        closedModalBtns.forEach((btn)=>btn.addEventListener('click',closeModal));
    }
    // document.addEventListener('click',(event)=>{
    //     if(
    //         modal.classList.contains('modal--opened') &&
    //         !event.target.closest('.modal__content') &&
    //         !event.target.closest('.js-show-modal')
    //     ){
    //         closeModal()
    //     } 
    // })
})