'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:GrouptodosCtrl
 * @description
 * # GrouptodosCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('GrouptodosCtrl', function ($rootScope, $scope, $window, $location, $routeParams) {

  	function init(){
  		if(!$routeParams.groupId || !$rootScope.groups || !$rootScope.todos){
  			$location.path("/");
  		}

  		var groupId 		=	$routeParams.groupId;
  		$scope.group 		=	_.find($rootScope.groups, function(group){ 
  									return group.id == groupId;
  								});
  		$scope.group.todos 	=	_.where($rootScope.todos, {'group_id' : parseInt(groupId) });
  	}

  	$scope.goBack = function(){
  		$window.history.back();
  	}

  	init();

  });
