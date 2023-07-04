const inputs = document.querySelectorAll(".buscar");

const filtroBusqueda = (input, selector)=>{
    inputs.forEach(e=>e.addEventListener("keyup", e =>{
        if(e.key==="Escape") e.target.value="";
        document.querySelectorAll(selector).forEach(element => {
            element.textContent.toLowerCase().includes(e.target.value) 
            ? element.classList.remove("filter") 
            : element.classList.add("filter")
        })
    }))
}

filtroBusqueda(".header__container-input",".card");