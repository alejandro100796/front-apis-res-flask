export function obtenerObjetoCU(cu){
    if(cu != undefined && cu != '' && cu.split('-').length>=3){
        var paisCanal 
        var sucursal        
        var folio        
        paisCanal = cu.split('-')[0]
        sucursal  = cu.split('-')[1]
        folio     = cu.split('-')[2]
        if(cu.split('-')[3] !== undefined){        
            folio += cu.split('-')[3]//folio
        }
    
        return {
           idPais:     Number(paisCanal.substring(0,2)),
           idCanal:    Number(paisCanal.substring(2,4)),
           idSucursal: Number(sucursal),
           folio:      Number(folio),
        }
    }else{
        return undefined
    }
}
export function obtenerObjetoCU4X4(cu){
    /** Only works if the object looks like this
     * {
         folio:24075
         idCanal:1
         idPais:1
         idSucursal:1139 
       }
    */
    if(cu != undefined && cu != {}){
        var _4x4 =''
        if(cu.idPais < 10){_4x4 += '0'+cu.idPais}
        else{_4x4 += cu.idPais}
        if(cu.idCanal < 10){_4x4 += '0'+cu.idCanal}
        else{_4x4 += cu.idCanal}
        _4x4 += '-' + cu.idSucursal 
        var folio = cu.folio.toString()       
        for(var index = 0; index < folio.length; index++){
            if((index % 4)  == 0){
                _4x4 += '-'+folio.charAt(index)
            }else{
                _4x4 += folio.charAt(index)
            }
        }
        return _4x4
    }else{
        return ""
    }
}