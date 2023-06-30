const listaProductos = async () => {const data = await fetch("https://my-json-server.typicode.com/ramsesgithub/Api_Ecommerce/productos"); return data.json();} 




export const productServices = {
    listaProductos,
}
