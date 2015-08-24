(function(){
  'use strict';

var app = angular.module('cityblocks', ['ui.router', 'uiGmapgoogle-maps']);

//config
app
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl : 'app/templates/home.html',
          controller  : 'homeCtrl'
      })
  });

})();