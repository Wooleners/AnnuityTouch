    angular.module('annuityApp.annuity', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/annuity', {
            templateUrl: 'modules/annuity/annuity.html',
            controller: 'annuityCtrl'
        });
    }])

    .controller('annuityCtrl', ['$scope', function($scope){

    }]);
