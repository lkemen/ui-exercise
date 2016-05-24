'use strict';

describe('Controller: SearchesCtrl', function () {

  // load the controller's module
  beforeEach(module('nuxeoApp'));

  var SearchesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchesCtrl = $controller('SearchesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
