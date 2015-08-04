'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/stats.html',
        controller: 'StatsCtrl',
        controllerAs: 'stats'
      })
      .when('/groupTodos/:groupId', {
        templateUrl: 'views/grouptodos.html',
        controller: 'GrouptodosCtrl',
        controllerAs: 'groupTodos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
