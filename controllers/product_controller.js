import { productServices } from "../services/product-service.js";


const crearProducto = (nombre, precio, id, imagen, categoria, descripcion) => {
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

const divPadre = document.querySelectorAll(".producto__container");

productServices.listaProductos().then(data => {
    data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
        //Imprimir datos en el index
        if(categoria === "Celulares"){
            const nuevoProducto = crearProducto(nombre, precio, descripcion, imagen, id, categoria);
            divPadre[0].appendChild(nuevoProducto);
        }
        else if(categoria === "Notebook"){
            const nuevoProducto = crearProducto(nombre, precio, descripcion, imagen, id, categoria);
            divPadre[1].appendChild(nuevoProducto);
        }
        else if(categoria === "Tablet"){
            const nuevoProducto = crearProducto(nombre, precio, descripcion, imagen, id, categoria);
            divPadre[2].appendChild(nuevoProducto);
        }
    });
});


const divAll = document.querySelector(".producto__container__all");
productServices.listaProductos().then(data => {
    data.forEach(({nombre, precio, descripcion, imagen, id, categoria})=>{
        const nuevosProductos = crearProducto (nombre, precio, descripcion, imagen, id, categoria);
        divAll.appendChild(nuevosProductos)
    })
})