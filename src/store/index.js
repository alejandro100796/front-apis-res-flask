import Vue from "vue";
import Vuex from "vuex";
import { VuexPersistence } from "vuex-persist";

/**Data Must be stored */
import productos            from '@/modules/productos'
/**Data Must be stored */

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  //El tipo de Storage que usará será el de LocalStorage
  storage: window.localStorage,
  modules: ["login","window","usuario"]
});

export default new Vuex.Store({
  strict: false,
  state: {},
  modules: {
      productos
  },
  
  plugins: [vuexLocal.plugin]
});