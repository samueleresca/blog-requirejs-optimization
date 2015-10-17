
require.config({
  paths: {
    hammer: "external/hammer.min"
  }
});

require(["module-one", "module-two", "module-three"], function () {
  console.log("Main: loaded");
});
