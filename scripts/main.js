//Main config file: http://requirejs.org/docs/api.html#config-baseUrl
require.config({
  //Define 3rd party plugins dependencies
  paths: {
    hammer: "external/hammer.min"
  }
});

//Main module
require(["module-one", "module-two", "module-three"], function () {
  console.log("Main: loaded");
});
