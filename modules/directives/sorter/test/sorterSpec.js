/*
 * sample unit testing for sample templates and implementations
 */
describe('uiGroup', function () {

  // declare these up here to be global to all tests
  var $rootScope, $compile;

  beforeEach(module('ui.directives'));

  // inject in angular constructs. Injector knows about leading/trailing underscores and does the right thing
  // otherwise, you would need to inject these into each test
  beforeEach(inject(function (_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  // optional grouping of tests
  describe('directive', function () {
	
    var element;

    it('should create an element if using element-style', function () {
      element = $compile('<ui-group></ui-group>')($rootScope);
      expect(element).toBeDefined();
    });
  			
  });

});
