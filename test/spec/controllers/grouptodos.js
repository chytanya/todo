'use strict';

describe('Controller: GrouptodosCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var GrouptodosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GrouptodosCtrl = $controller('GrouptodosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GrouptodosCtrl.awesomeThings.length).toBe(3);
  });
});
