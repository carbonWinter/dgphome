(function () {
  window.Centipede = window.Centipede || {};
  var Util = Centipede.Util = function () {};

  Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Util.randomHexColor = function () {
    // return '#' + Math.floor(Math.random() * 16777215).toString(16);
    const colors = ["#ec1e79", "#d3135a", "#9e005d", "#92278f", "#662c91", "#1b1363", "#2d3092", "#2d3092","#0070bb", "#29abe1", "#00a99d", "#21b573", "#009245", "#39b549", "#8bc53e", "#d9df20"];
    return colors[Math.floor(Math.random() * colors.length)];


  };
})();
