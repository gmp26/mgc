app.directive('mgcEval', function(funcGen) {
	var fg = funcGen;

  return {
    restrict: 'C', // the directive can be invoked only by using  mgc-eval="" in the template
    scope: true,	
    link: function (scope, element, attrs) {
	    // initialization, done once per my-directive tag in template. If my-directive is within an
	    // ng-repeat-ed template then it will be called every time ngRepeat creates a new copy of the template.

			var f = fg.define(attrs.f);
			
			//scope.x = scope.x | 0;
			attrs.sigfigs = attrs.sigfigs | 3;

			console.log(element.html());

	    scope.$watch('x', function (newVal, oldVal) {
			  console.log(attrs.sigfigs);
				element.html(f(scope.x).toPrecision(attrs.sigfigs));
	    });
	  }
  };
});