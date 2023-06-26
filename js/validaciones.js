const btn = document.querySelector(".login__form--boton");

btn.addEventListener("click",e=>{
    e.preventDefault();
    location.href="../pages/todos_productos.html";
});
