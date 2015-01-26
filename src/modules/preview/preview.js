    angular.module('annuityApp.preview', ['ngRoute', 'pdf', 'base64'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/preview/:path'  , {
            templateUrl: 'modules/preview/preview.html',
            controller: 'previewCtrl'
        });
    }])

    .controller('previewCtrl', ['$scope', '$routeParams', '$base64', function($scope, $routeParams, $base64){
        $scope.title = '预览';
        //url
        $scope.pdfUrl = "http://www.pingan.com/cms-tmplt/attByStream.do?attPath=" + $base64.decode($routeParams.path);
        


        //nav init
        $scope.scroll = 0;

    }]);
