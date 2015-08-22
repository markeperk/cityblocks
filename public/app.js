(function(){
  'use strict';

var app = angular.module('cityblocks', [ 'ui.router']);

//config
app
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl : 'app/login/home.html',
          controller  : 'HomeCtrl'
      })
  });

})();