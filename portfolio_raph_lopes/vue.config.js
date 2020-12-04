module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
          options: {
            svgo: {
              plugins: [
                { cleanupIDs: false },
              ],
            },
          }
        },
      ],
    }
  },
  /*devServer:{
    port:8080,
    https :true
  }*/
};

/*
devServer:{
  port:8080,
      https :true
}*/
