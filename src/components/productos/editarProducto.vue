<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon
        small
        class="p-0 m-0"
         v-bind="attrs"
         v-on="on"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Editar producto
        </v-card-title>
          <v-form v-model="valid">
    <v-container>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="objetProducto.name_pro"
            label="Nombre"
            required
            :placeholder="objetProducto.name_pro"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <v-text-field
            v-model="objetProducto.price"
            label="Last name"
            required
            :placeholder="objetProducto.price"
          ></v-text-field>
        </v-col>
              <v-btn
        class="mr-4 primary"
        @click="updatePro()"
      >
        submit
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
    props: ['objetProducto'],
    data () {
      return {
        dialog: false,
        dataPro: {}
      }
    },
    methods: {
        ...mapActions('productos',['editaProducto']),

        updatePro: function(){
            this.dataPro = {"name_pro": this.objetProducto.name_pro ,
                            "price": this.objetProducto.price,
                            "id": this.objetProducto.id}

            this.editaProducto( this.dataPro)
            this.dialog = false
        }
    }

  }
</script>
