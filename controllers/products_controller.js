import { productServices } from "../services/product-service.js";
import { crearProducto } from "./product_controller.js";

const divAll = document.querySelector(".producto__container__all");

productServices.listaProductos().then(data => {
    data.forEach(({nombre, precio, descripcion, imagen, id, categoria})=>{
        const nuevosProductos = crearProducto (nombre, precio, descripcion, imagen, id, categoria);
        divAll.append(nuevosProductos);
    })
});