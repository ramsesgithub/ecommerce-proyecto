import { productServices } from "../services/product-service.js";
import { crearProducto } from "./product_controller.js";

const divAll = document.querySelector(".producto__container__all");

const mostrarTodosProductos = async () =>{
    const data = await productServices.listaProductos();
    data.forEach(({nombre, precio, descripcion, imagen, id, categoria})=>{
        const nuevosProductos = crearProducto (nombre, precio, descripcion, imagen, id, categoria);
        divAll.append(nuevosProductos);
    })
} 

const loader = document.getElementById("loader");
mostrarTodosProductos().then(()=>{ 
    //eliminar loader una vez cargados los productos
    loader.classList.remove("loader","lds-ring")
});;