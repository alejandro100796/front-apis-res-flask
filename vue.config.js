module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  lintOnSave: false,
  // publicPath: '/productos',  
  productionSourceMap: false,
  devServer: {
    // proxy: 'https://api-rest-full-emad.herokuapp.com',
    public : 'localhost',
    hot: true,
    disableHostCheck : true
  },
}