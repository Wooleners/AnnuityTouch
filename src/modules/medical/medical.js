angular.module('annuityApp.medical', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/medical', {
        templateUrl: 'modules/medical/medical.html',
        controller: 'medicalCtrl'
    })
    .when('/medical/gansu', {
        templateUrl: 'modules/medical/gansu.html',
        controller: 'medicalGsCtrl'
    })
    .when('/medical/news', {
        templateUrl: 'modules/medical/news.html',
        controller: 'medicalNewsCtrl'
    })
    .when('/medical/policy', {
        templateUrl: 'modules/medical/policy.html',
        controller: 'medicalPolicyCtrl'
    })
}])

.controller('medicalCtrl', ['$scope', 'infoService', function($scope, infoService){

}])

.controller('medicalGsCtrl', ['$scope', function($scope){

}])

.controller('medicalPolicyCtrl', ['$scope', 'infoService', function($scope, infoService){
    $scope.infoList = [];
    $scope.infoBufferNum = 20;
    $scope.totalNum = 0;
    $scope.currentTabs = 0;

    initInfoList();
    //init infoList
    function initInfoList(){
        loadRemoteData({
            method: "articleList",
            channelId: 562,
            channelLevel: 2,
            number: 20
        });
    }

    function applyRemoteData(data){
        $scope.infoList = data.articleList;
        $scope.totalNum = data.totalNum;
    }

    function loadRemoteData(params){
        infoService.getInfoList(params).then(function(data){
            applyRemoteData(data);
        });
    }
}])

.controller('medicalNewsCtrl', ['$scope', 'infoService', function($scope,infoService){

    $scope.infoList = [];
    $scope.infoBufferNum = 20;
    $scope.totalNum = 0;
    $scope.currentTabs = 0;

    initInfoList();
    //init infoList
    function initInfoList(){
        loadRemoteData({
            method: "articleList",
            channelId: 561,
            channelLevel: 2,
            number: 20
        });
    }

    function applyRemoteData(data){
        $scope.infoList = data.articleList;
        $scope.totalNum = data.totalNum;
    }

    function loadRemoteData(params){
        infoService.getInfoList(params).then(function(data){
            applyRemoteData(data);
        });
    }
}]);
