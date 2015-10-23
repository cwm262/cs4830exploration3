'use strict';

/**
 * @ngdoc overview
 * @name cs4830exploration3App
 * @description
 * # cs4830exploration3App
 *
 * Main module of the application.
 */
angular
  .module('cs4830exploration3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'xeditable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/myNotes', {
        templateUrl: 'views/myNotes.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
