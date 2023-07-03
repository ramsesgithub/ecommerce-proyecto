const valida = input =>{
    const tipoDeInput = input.dataset.tipo;
    //validar si en campo es valido y mostrar mennsaje
    if(input.validity.valid){
        input.parentElement.classList.remove("footer__contacto__form__container--invalid");
        input.parentElement.querySelector(".footer__contacto__form__container-err").innerHTML="";
    }else{
        input.parentElement.classList.add("footer__contacto__form__container--invalid");
        input.parentElement.querySelector(".footer__contacto__form__container-err").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}


const tipoDeErrores = [
    "valueMissing",
    "patternMismatch",
];

const mensajesDeError = {
    nombre:{valueMissing: "El nombre no puede estar vacio",patternMismatch:"El nombre debe contener solo letras"},
    mensaje:{valueMissing:"El mensaje no puede estar vacio"},
}


const mostrarMensajeDeError = (tipoDeInput, input) => {
    let mensaje = "";
    tipoDeErrores.forEach(error =>{
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

const formInput = document.querySelectorAll(".form-input");

formInput.forEach(input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    })
})