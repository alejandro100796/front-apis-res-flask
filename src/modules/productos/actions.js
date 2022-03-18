import {ServiceFactory} from '@/service/ServiceFactory'
const productosService = ServiceFactory.get('productos')

export async function obtenerTodosProductos(context){
    await productosService.obtenerProductos()
        .then(response => {
            console.log(response.data.products)
            context.commit('productos/setProductos', response.data.products, { root: true })
        }).catch(error => {
            console.log(error)
        })
}
export async function eliminarProducto(context,id){
    await productosService.eliminarProducto(id)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
}

export async function editaProducto(context, data){
    await productosService.actualizarProducto(data.id, data)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
}

export async function registraProducto(context, data){
    await productosService.registrarProducto( data)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
}

export async function obtenerUnProducto(context, id){
    await productosService.obtnerProducto( id)
        .then(response => {
            console.log(response)
            context.commit('productos/setProductos', response.data.product, { root: true })
        }).catch(error => {
            console.log(error)
        })
}
