import { productServices } from "../services/product-service.js";

export const crearProducto = (nombre, precio, id, imagen, categoria, descripcion) => {
    const div = document.createElement("div");
    div.classList.add("producto__container__contenido");
    const contenido = `
        <div>
            <img class="producto__container__contenido--img" src="${imagen}" alt="">
        </div>
        <p class="producto__container__contenido-pro">${nombre}</p>
        <p class="producto__container__contenido-pre">$ ${precio}</p>
        <a class="producto__container__contenido-ver" id="${id}">Ver producto</a>
    `
    div.innerHTML = contenido;
    return div;
}

const celulares = document.getElementById("container1");
const notebooks = document.getElementById("container2");
const tablets = document.getElementById("container3");

const mostrarProductos = async () => {
    const data = await productServices.listaProductos();
        data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) =>{
            //Mostrar productos en el index
            if(categoria === "Télefono"){
                const nuevoProducto = crearProducto(nombre, precio, descripcion, imagen, id, categoria);
                celulares.append(nuevoProducto);
            }
            else if(categoria === "Notebook"){
                const nuevoProducto = crearProducto(nombre, precio, descripcion, imagen, id, categoria);
                notebooks.append(nuevoProducto);
            }
            else if(categoria === "Tablet"){
                const nuevoProducto = crearProducto(nombre, precio, descripcion, imagen, id, categoria);
                tablets.append(nuevoProducto);
            }
        });
}

mostrarProductos();