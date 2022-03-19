
<template>
<v-container fluid>
    <v-card
  class="felx justify-center align-center p-5"
    outlined
  >
    <div>
      <div>
        <v-row>
          <div class="col-4">
            <crearProducto/>
          </div>
          <div class="col-4">
              <template>
                <label for="">Buscar</label>
                <v-text-field v-model="idProducto"></v-text-field>
                <v-btn class="secondary"
                      @click="getProduct(idProducto)"
                        >busca</v-btn>
              </template>
          </div>   
          <div class="col-4">
            <v-btn class="info"
                      @click="obtenerTodosProductos()"
                        >Limpiar Busqueda</v-btn>
          </div>
        </v-row>
      </div>

<v-data-table
    :headers="headers"
    :items="productosList"
    :items-per-page="5"
    class="elevation-1"
  >
    
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
        <editarProducto v-bind:objetProducto="item"/>
    </template>
  </v-data-table>

    </div>
  </v-card>
</v-container>

</template>
<script>
import { mapActions, mapState, mapMutations,mapGetters } from 'vuex'
import editarProducto from '@/components/productos/editarProducto'
import crearProducto from '@/components/productos/crearProducto'
export default {
    components:{
        editarProducto,
        crearProducto
    },
    data(){
        return{ 
            headers: [
                { text: 'id', value: 'id', align: 'center' },
                {text: 'Fecha de Creacion', sortable: false, value: 'create_date',},
                { text: 'Nombre del producto', value: 'name_pro' },
                { text: 'Precio', value: 'price' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            dialogDelete:false,
            dialog:false,
            editedIndex: -1,
            idProducto:0

        }
        
    },

    created () {
        console.log('entro en la funcion')
       this.obtenerTodosProductos()
       
    },

    methods:{
        ...mapActions("productos",['obtenerTodosProductos','eliminarProducto','obtenerUnProducto']),

       deleteItem:function(item){
          
           this.eliminarProducto(item.id)
            this.obtenerTodosProductos()
       },
       getProduct:function(id){
          console.log(id)
            this.obtenerUnProducto(id)
       }
    },
    watch:{
        ...mapState('productos', ['productosList'])
    },
    computed:{
        ...mapState('productos', ['productosList'])
    },
}

</script>
<style scoped>

</style>
