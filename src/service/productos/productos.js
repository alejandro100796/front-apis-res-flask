import service from '@/service/service'

const obtenerProductos =  '/products'
const obtenerUnProdu =  '/products'
const registrar =  '/products'
const actualizar =  '/products'
const borara =  '/products'


export default{    
    async obtenerProductos(){
        return await service.get(`${obtenerProductos}`)
    },
    obtnerProducto(id){
        return service.get(`${obtenerUnProdu}/${id}`)
    },   
    registrarProducto(datos){
        return service.post(`${registrar}`, datos)
    },   
    actualizarProducto(id, datos){
        var name = datos.name_pro
        var price = datos.price
        return service.put(`${actualizar}/${id}`, {"name_pro": name, "price":price})
    }, 
    eliminarProducto(id){
        return service.delete(`${borara}/${id}`)
    },
}