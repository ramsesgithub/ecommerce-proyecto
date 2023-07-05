import { productServices } from "../services/product-service.js";

const form = document.querySelector(".form");

form.addEventListener("submit", e =>{
    e.preventDefault();
    const imagen = document.querySelector(".form__agregar__area-img").src;
    const categoria = document.querySelector(".form__container__select").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    productServices.crearProducto(nombre, precio, descripcion, imagen, categoria).then(()=>{
        alert(`PRODUCTO AGREGADO CORRECTAMENTE`);
        location="../pages/admin_productos.html";
    }).catch(e=>console.log(e))
});