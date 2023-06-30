import { productServices } from "../services/product-service.js";


export const crearProducto = (nombre, precio, id, imagen, categoria, descripcion) => {
    const div = document.createElement("div");
    div.classList.add("producto__container__contenido");
    const contenido = `
        <div>
            <img class="producto__container__contenido--img" src="${imagen}" alt="">
        </div>
        <p class="producto__container__contenido-pro">${nombre}</p>
        <p class="producto__container__contenido-pre">${precio}</p>
        <a class="producto__container__contenido-ver" id="${id}">Ver producto</a>
    `
    div.innerHTML = contenido;
    return div;
}

const celulares = document.querySelector("#container1");
const notebooks = document.querySelector("#container2");
const tablets = document.querySelector("#container3");

const mostrarProductos = async () => {
    const data = await productServices.listaProductos()
        data.forEach(product =>{
            //Mostrar productos en el index
            if(product.categoria === "Celulares"){
                const nuevoProducto = crearProducto(product.nombre, product.precio, product.descripcion, product.imagen, product.id, product.categoria);
                celulares.append(nuevoProducto);
            }
            else if(product.categoria === "Notebook"){
                const nuevoProducto = crearProducto(product.nombre, product.precio, product.descripcion, product.imagen, product.id, product.categoria);
                notebooks.append(nuevoProducto);
            }
            else if(product.categoria === "Tablet"){
                const nuevoProducto = crearProducto(product.nombre, product.precio, product.descripcion, product.imagen, product.id, product.categoria);
                tablets.append(nuevoProducto);
            }
        });
}

mostrarProductos();