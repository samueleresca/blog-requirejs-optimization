//Main config file
require.config({
  //Define 3rd party plugins dependencies
  paths: {
    hammer: "external/hammer.min"
  }
});

//Main execution
require(["module-one", "module-two", "module-three"], function () {
  console.log("Main: loaded");
});
