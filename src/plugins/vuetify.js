import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';
import 'vuetify/dist/vuetify.css'
import '@mdi/font/css/materialdesignicons.css' 
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { es },
        current: 'es',
      },
      icons: {
        iconfont: 'mdi',
      },
      theme: {
        themes: {
          light: {
            primary: '#067206',///colors.green.darken4,
            secondary: '#4fad2f',
            accent: colors.shades.black,
            error: colors.red.accent3,
            bazGreen:'#1d912a',
            blueDarken4:'#0D47A1',
            bluelighten2:'#64B5F6',
            blueDarken1:'#1E88E5',
            purplelighten4:'#E1BEE7',
            tealLighten1:'#26A69A',
            tealLighten2:'#4DB6AC',
            tealLighten3:'#80CBC4',
            tealLighten4:'#B2DFDB',
            tealLighten5:'#E0F2F1',
            tealDarken2:'#00796B',
            tealAccent4:'#00BFA5',
            tealAccent3:'#1DE9B6',
            tealAccent2:'#64FFDA',
            tealAccent1:'#A7FFEB',
            tealDarken4:'#004D40',
            greenAccent1:'#B9F6CA',
            greenAccent2:'#69F0AE',
            greenAccent3:'#00E676',
            greenAccent4:'#00C853',
            greyDarken3:'#424242',
            redLighten4:'#FFCDD2',
            redDarken4:'#B71C1C',
            
            /***color provided by UX */
            blueInfo:'#2B9CEF',
            redCancelDelete:'#E63422',
            greenTheme:'#1D912A',
            blackDefault:'#2A2A2B',
            grayDefault:'#5D5F63',
            yellowGS:'#FFD600',

            darkTheme:'#272727',
            dialogDark:'#2c2c2c',
            darkSheet:'#3a3a3a',
            cancelDeleteDark:'#af2d1e',
            greenThemeDark:'#196b22',
            appBackground:'#f3f3f3',
            appBackgroundDark:'#5D5F63'
          },
          dark: {
            primary: colors.blue.lighten3,
          },
        },
      },
});
