
angular.module('annuityApp.details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/details/:articleId', {
        templateUrl: 'modules/details/details.html',
        controller: 'detailsCtrl'
    });
}])

.controller('detailsCtrl', ['$scope', '$routeParams', 'infoService', '$rootScope', function($scope, $routeParams, infoService, $rootScope) {

    $scope.$routeParams = $routeParams;
    $scope.article = {};
    $scope.articleContent = "";
    $scope.backLink = !!$rootScope.previousRouter && $rootScope.previousRouter.originalPath || 'main';

    initArticle();

    //init infoList
    function initArticle(){
        loadRemoteData({
            method: "articleDetail",
            articleId: $scope.$routeParams.articleId
        });
    }

    function applyRemoteData(data){
        $scope.article = data;
        $scope.title = (!!$rootScope.previousRouter && ($rootScope.previousRouter.originalPath == "/news" || $rootScope.previousRouter.originalPath == "/main")) ? "详情" : $scope.article.articleTitle;
        angular.element('#strBuffer').html($scope.article.articleContent);
        angular.element('#content').html(angular.element('#strBuffer').text());
    }


    function loadRemoteData(params){
        infoService.getDetails(params).then(function(data){
            applyRemoteData(data);
        });
    }

}])

.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
