
import ProductosService from '@/service/productos/productos'

const services = {
    productos:            ProductosService
    //agregar los nuevos servicios
};

export const ServiceFactory = {
    get: name => services[name]
};

 