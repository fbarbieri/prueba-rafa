'use strict';

/**
 * @ngdoc overview
 * @name proyectoFedeApp
 * @description
 * # proyectoFedeApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'ui.grid.cellNav',
    'ui.grid.pinning',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/area/list.html',
        controller: 'AreasListCtrl',
        controllerAs: 'main'
      })
      .when('/area/edit', {
        templateUrl: 'views/area/edit.html',
        controller: 'AreasEditCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
