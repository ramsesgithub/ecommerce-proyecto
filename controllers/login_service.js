import { productServices } from "../services/product-service.js";

const form = document.querySelector(".login__form");
//res del resultado de email
let res;

const mostrarClientes = async (emailUsuario, passwordUsuario) => {
    const data = await productServices.listaPerfil();
    data.forEach(({email, password}) => {
        if(email === emailUsuario && password === passwordUsuario){
            //si el resultado de email, emailusu y pass, passUsu son iguales entonces res vale true;
            res = true;
        }
    })
}



form.addEventListener("submit", e =>{
    e.preventDefault();
    //se guarda el valor que ingreso el usuario en el form
    let emailUsuario = document.getElementById("email").value;
    let passwordUsuario = document.getElementById("password").value;
    mostrarClientes(emailUsuario, passwordUsuario).then(()=>{
        //Comparamos el valor de res si es true, iniciamos Sesion
        if(res){
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Iniciando Sesion...',
                showConfirmButton: false,
                timer: 2000,
            }).then(function(){
                location.href="../pages/admin_productos.html";
            })
        }else{
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Email y/o contraseña incorrecto',
                showConfirmButton: false,
                timer: 1500,
            })
        }
    })
});

