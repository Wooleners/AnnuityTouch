    angular.module('annuityApp.pension', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pension', {
            templateUrl: 'modules/pension/pension.html',
            controller: 'pensionCtrl'
        });
    }])

    .controller('pensionCtrl', ['$scope', function($scope){
    }]);
