import { productServices } from "../services/product-service.js";

const form = document.querySelector(".login__form--boton");

const mostrarClientes = async (emailUsuario, passwordUsuario) => {
    const data = await productServices.listaPerfil();
    data.forEach(({email, password}) => {
        if(email === emailUsuario && password === passwordUsuario){
            alert("SESION INICIADA");
            location.href="../pages/admin_productos.html";
        }
    })      
}


form.addEventListener("click", e =>{
    e.preventDefault();
    let emailUsuario = document.getElementById("email").value;
    let passwordUsuario = document.getElementById("password").value;
    mostrarClientes(emailUsuario, passwordUsuario);
})