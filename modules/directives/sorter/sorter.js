angular.module('ui.directives').directive('uiSorter', ['ui.config', function () {
  return {
    restrict: 'EAC', // supports using directive as element, attribute and class
		scope: true
  };
}]);
