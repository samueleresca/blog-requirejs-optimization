
//Main dependencies
require.config({
  paths: {
    hammer: "external/hammer.min"
  }
});

//Main execution
require(["module-one", "module-two", "module-three"], function () {
  console.log("Main: loaded");
});
