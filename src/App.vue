<template>  
  <v-app>    
    <vue-snotify style="z-index:100"></vue-snotify>
    <router-view ></router-view>
  </v-app>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  methods:{
    ...mapMutations('window',['handleResize']),    
  },
    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
}
</script>
<style >

@font-face {
    font-family: 'AvenirNext';
    src: local('AvenirNext LT Pro Regular'), url('~@/assets/baz-font/Tipografias/Avenir Next LT Pro/AvenirNextLTPro-Regular.otf') format('opentype');
}
@font-face {
    font-family: 'AvenirNext Bold';
    src: local('AvenirNext LT Pro Bold'), url('~@/assets/baz-font/Tipografias/Avenir Next LT Pro/AvenirNextLTPro-Bold.otf') format('opentype');
}
.v-application{
  font-family: 'AvenirNext' !important;  
  width: 100%;
  height: 100%;
  /*background:#5D5F63 !important;*/
}
.v-application-scl {  
  background:#f3f3f3 !important;
}
.v-application-scl-dark {  
  background:rgb(107, 109, 112) !important; 
  /*background:rgb(119, 119, 119) !important;*/
}

.v-application strong{
  font-family: 'AvenirNext Bold' !important;  
}
</style>