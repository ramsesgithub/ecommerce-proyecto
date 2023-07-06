import { productServices } from "../services/product-service.js";

/* Ver Producto */

const verProducto = (nombre, precio, descripcion, imagen, id, categoria) => {
    const div = document.createElement("div");
    div.classList.add("producto__container__contenido");
    const contenido = `
        <div class="producto__container__contenido__img">
            <img class="producto__container__contenido--img" src="${imagen}" alt="">
        </div>
        <p class="producto__container__contenido-pro">${nombre}</p>
        <p class="producto__container__contenido-pre">$ ${precio}</p>
        <p class="producto__container__contenido-pre">${descripcion}</p>
    `
    div.innerHTML = contenido;
    return div;
}


const container = document.querySelector(".producto__container");

const mostrarProducto = async (id) => {
    const data = await productServices.verProducto(id);
    const nuevoProducto = verProducto(data.nombre, data.precio, data.descripcion, data.imagen, data.id, data.categoria);
    mostrarSimilares(data.categoria);
    container.appendChild(nuevoProducto);
}

const url = new URL(location);
//busca el parametro que le digamos en la url 
const id = url.searchParams.get("id");

mostrarProducto(id);




/* PRODUCTOS SIMILARES */

const verSimilares = (nombre, precio, descripcion, imagen, id, categoria) => {
    const div = document.createElement("div");
    div.classList.add("similares__container__contenido");
    const contenido = `
        <div class="similares__container__contenido__img">
            <img class="similares__container__contenido--img" src="${imagen}" alt="">
        </div>
        <p class="similares__container__contenido-pro">${nombre}</p>
        <p class="similares__container__contenido-pre">$ ${precio}</p>
        <a href="../pages/ver-producto.html?id=${id}" class="similares__container__contenido-ver" id="${id}">Ver producto</a>
    `
    div.innerHTML = contenido;
    return div;
}

const containerSimilares = document.querySelector(".similares__container");

const mostrarSimilares = async (cat) => {
    const data = await productServices.listaProductos();
    data.forEach(({nombre, precio, descripcion, imagen, id, categoria})=>{
        if(cat === categoria){
            const productosSimilares = verSimilares(nombre, precio, descripcion, imagen, id, categoria);
            containerSimilares.append(productosSimilares);
        }
    })
}
