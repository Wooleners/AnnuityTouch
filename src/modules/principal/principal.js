    angular.module('annuityApp.principal', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/principal', {
            templateUrl: 'modules/principal/principal.html',
            controller: 'principalCtrl'
        });
    }])

    .controller('principalCtrl', ['$scope', function($scope){

    }]);
