export function setProductos(state, productos){
    // console.log(typeof(productos))
    if(Array.isArray(productos)){
        state.productosList = productos;
    }else{
        state.productosList = [productos];
    }
    // console.log(state.productosList)
}
