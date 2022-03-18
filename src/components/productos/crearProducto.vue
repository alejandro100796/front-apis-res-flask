<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="mr-2 primary"
         v-bind="attrs"
         v-on="on"
        @click="editItem(item)"
      >
       Crear
      </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Crear Producto
        </v-card-title>
          <v-form v-model="valid">
    <v-container>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="nombre"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <v-text-field
            v-model="price"
            label="Precio"
            required
          ></v-text-field>
        </v-col>
              <v-btn
        class="mr-4 primary"
        @click="createPro()"
      >
        Crear
      </v-btn>
    </v-container>
  </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        nombre: '',
        price: 0,
        dialog: false,
        dataPro: {}
      }
    },
    methods: {
        ...mapActions('productos',['registraProducto', 'obtenerTodosProductos']),

        createPro: function(){
            this.dataPro = {"name_pro": this.nombre ,
                            "price": this.price}

            this.registraProducto( this.dataPro)
            this.obtenerTodosProductos()
            this.dialog = false 
        }
    }

  }
</script>