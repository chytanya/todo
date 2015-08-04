'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:StatsCtrl
 * @description
 * # StatsCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('StatsCtrl', function ($rootScope, $scope, $location) {
  	 function init(){
  		// get a list of groups and count of todos for each group
  		groupTodos();
  	}

  	function groupTodos(){

  		$scope.groups 	=	$rootScope.groups;

  		angular.forEach($scope.groups, function(group){
  			var todosWithGroupId 	=	_.where($rootScope.todos, {'group_id' : group.id });
  			group.todos = todosWithGroupId;
  		});

  	}

  	$scope.goToGroupTasks = function(groupId){
  		$location.path("/groupTodos/" + groupId);
  	}

  	//data mock
    $rootScope.todos 	=	[
    	{
    		'text' : 'THis is todo 1',
    		'group_id' : 1,
    		'status' : false,
    		'due' : '2015-08-16 09:00:00 PM',
    		'created' : '2015-02-02 09:00:00 PM',
    	},
    	{
    		'text' : 'THis is todo 2',
    		'group_id' : 2,
    		'status' : false,
    		'due' : '2015-02-16 09:00:00 PM',
    		'created' : '2015-02-02 09:00:00 PM',
    	},
    	{
    		'text' : 'THis is todo 3',
    		'group_id' : 2,
    		'status' : true,
    		'due' : '2015-02-16 09:00:00 PM',
    		'created' : '2015-02-02 09:00:00 PM',
    	},
    	{
    		'text' : 'THis is todo 4',
    		'group_id' : 3,
    		'status' : false,
    		'due' : '2015-02-16 09:00:00 PM',
    		'created' : '2015-02-02 09:00:00 PM',
    	},
    	{
    		'text' : 'THis is todo 5',
    		'group_id' : 4,
    		'status' : false,
    		'due' : '2015-02-16 09:00:00 PM',
    		'created' : '2015-02-02 09:00:00 PM',
    	},
    	{
    		'text' : 'THis is todo 6',
    		'group_id' : 4,
    		'status' : true,
    		'due' : '2015-02-16 09:00:00 PM',
    		'created' : '2015-02-02 09:00:00 PM',
    	},
    	{
    		'text' : 'THis is todo 7',
    		'group_id' : 4,
    		'status' : true,
    		'due' : '2015-02-16 09:00:00 PM',
    		'created' : '2015-02-02 09:00:00 PM',
    	},
    	{
    		'text' : 'THis is todo 8',
    		'group_id' : 5,
    		'status' : false,
    		'due' : '2015-02-16 09:00:00 PM',
    		'created' : '2015-02-02 09:00:00 PM',
    	}
    ];

    $rootScope.groups 	=	[
    	{
    		'id' : 1,
    		'name' : 'Shop',
    		'color' : 'red'
    	},
    	{
    		'id' : 2,
    		'name' : 'Work',
    		'color' : 'green'	
    	},
    	{
    		'id' : 3,
    		'name' : 'Health',
    		'color' : 'lightgreen'
    	},
    	{
    		'id' : 4,
    		'name' : 'Travel',
    		'color' : 'skyblue'
    	},
    	{
    		'id' : 5,
    		'name' : 'Bills',
    		'color' : 'orange'
    	},
    	{
    		'id' : 6,
    		'name' : 'Auto',
    		'color' : 'teal'
    	}
    ];

   	init();
  });
