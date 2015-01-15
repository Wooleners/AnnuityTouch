    angular.module('annuityApp.preview', ['ngRoute', 'pdf'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/preview'  , {
            templateUrl: 'modules/preview/preview.html',
            controller: 'previewCtrl'
        });
    }])

    .controller('previewCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
        $scope.title = '预览';
        //url
        $scope.pdfUrl = $routeParams.path || null;
        
        //nav init
        $scope.scroll = 0;

        $scope.getNavStyle = function(scroll) {
            if (scroll > 100) return 'pdf-controls fixed';
            else return 'pdf-controls';
        }
    }]);
