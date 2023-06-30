import { productServices } from "../services/product-service.js";

const crearProductoAdmin = (nombre, precio, descripcion, imagen, id, categoria) => {
    const div = document.createElement("div");
    div.classList.add("producto__container__contenido__admin");
    const contenido = `
        <div>
            <a><img src="../assets/delete.svg"></a>
            <a><img src="../assets/edit.svg"></a>
            <img class="producto__container__contenido--img" src="${imagen}" alt="">
        </div>
        <p class="producto__container__contenido-pro">${nombre}</p>
        <p class="producto__container__contenido-pre">$ ${precio}</p>
        <p class="producto__container__contenido-pre">#${id}</p>
    `
    div.innerHTML = contenido;
    return div;
}

const containerAdmin = document.querySelector(".producto__container__admin");

const mostrarTodosProductos = async () =>{
    const data = await productServices.listaProductos();
    data.forEach(({nombre, precio, descripcion, imagen, id, categoria})=>{
        const nuevosProductos = crearProductoAdmin (nombre, precio, descripcion, imagen, id, categoria);
        containerAdmin.append(nuevosProductos);
    })
} 

mostrarTodosProductos();