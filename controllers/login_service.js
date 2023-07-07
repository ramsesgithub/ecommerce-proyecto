import { productServices } from "../services/product-service.js";

const form = document.querySelector(".login__form");

const mostrarClientes = async (emailUsuario, passwordUsuario) => {
    const data = await productServices.listaPerfil();
    data.forEach(({email, password}) => {
        if(email === emailUsuario && password === passwordUsuario){
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Iniciando Sesion...',
                showConfirmButton: false,
                timer: 2000,
            }).then(function() {
                window.location.href = "../pages/admin_productos.html";
            });
        }
    })
}



form.addEventListener("submit", e =>{
    e.preventDefault();
    let emailUsuario = document.getElementById("email").value;
    let passwordUsuario = document.getElementById("password").value;
    if((mostrarClientes(emailUsuario, passwordUsuario))){
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Email y/o contraseña incorrecto',
            showConfirmButton: false,
            timer: 1500,
        })
    }
})