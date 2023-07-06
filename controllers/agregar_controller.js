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
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Producto Agregado Correctamente :)',
            showConfirmButton: false,
            timer: 1500,
        });
        location.href = "../pages/admin_productos.html";
    });
});


// form.addEventListener("submit", e =>{
//     e.preventDefault();
//     const imagen = document.querySelector(".form__agregar__area-img").src;
//     const categoria = document.querySelector(".form__container__select").value;
//     const nombre = document.querySelector("[data-nombre]").value;
//     const precio = document.querySelector("[data-precio]").value;
//     const descripcion = document.querySelector("[data-descripcion]").value;
//     productServices.crearProducto(nombre, precio, descripcion, imagen, categoria).then(()=>{
//         Swal.fire({
//             position: 'top-center',
//             icon: 'success',
//             title: 'Producto Agregado Correctamente :)',
//             showConfirmButton: false,
//             timer: 2000,
//         }).then(function() {
//             window.location.href = "../pages/admin_productos.html";
//             });
//     }).catch(e=>console.log(e))
// });