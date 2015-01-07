'use strict'

angular.module('annuityApp')
  .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
      $routeProvider.otherwise({
          redirectTo: '/main'
      });
    //$locationProvider.html5Mode(true);
  }])
  .run(['$rootScope','$location',function($rootScope,$location){
      $rootScope.$on("$routeChangeSuccess", function (event, current, previous, rejection) {
        $rootScope.previousRouter = previous;
      });
  }]);
