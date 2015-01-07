angular.module('annuityApp.groupIns', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/groupIns', {
            templateUrl: 'modules/groupIns/groupIns.html',
            controller: 'groupInsCtrl'
        })
        .when('/groupIns/personal', {
            templateUrl: 'modules/groupIns/personal.html',
            controller: 'groupInsPsCtrl'
        })
        .when('/groupIns/company', {
            templateUrl: 'modules/groupIns/company.html',
            controller: 'groupInsCyCtrl'
        })
        .when('/groupIns/jbd', {
            templateUrl: 'modules/groupIns/jbd.html',
            controller: 'groupInsJbCtrl'
        })
        .when('/groupIns/company/smallTeamPro', {
            templateUrl: 'modules/groupIns/smallTeamPro.html',
            controller: 'groupInsSmallTeamProCtrl'
        })
        .when('/groupIns/company/bigTeamPro', {
            templateUrl: 'modules/groupIns/bigTeamPro.html',
            controller: 'groupInsBigTeamProCtrl'
        })
        .when('/groupIns/company/teamIns', {
            templateUrl: 'modules/groupIns/teamIns.html',
            controller: 'groupInsTeamInsoCtrl'
        })
        .when('/groupIns/company/ydl', {
            templateUrl: 'modules/groupIns/ydl.html',
            controller: 'groupInsYdlCtrl'
        })
        .when('/groupIns/company/zht', {
            templateUrl: 'modules/groupIns/zht.html',
            controller: 'groupInsZhtCtrl'
        })
        .when('/groupIns/company/zytc', {
            templateUrl: 'modules/groupIns/zytc.html',
            controller: 'groupInsZytcCtrl'
        })
        .when('/groupIns/jbd/insuranceProducts', {
            templateUrl: 'modules/groupIns/insuranceProducts.html',
            controller: 'insuranceProductsCtr'
        })
        .when('/groupIns/jbd/eService', {
            templateUrl: 'modules/groupIns/eService.html',
            controller: 'eServiceCtr'
        })
        .when('/groupIns/jbd/omnibusService', {
            templateUrl: 'modules/groupIns/omnibusService.html',
            controller: 'omnibusServiceCtr'
        })
        .when('/groupIns/jbd/clientService', {
            templateUrl: 'modules/groupIns/clientService.html',
            controller: 'clientServiceCtr'
        })
        .when('/groupIns/jbd/focusHomework', {
            templateUrl: 'modules/groupIns/focusHomework.html',
            controller: 'focusHomeworkCtr'
        })
        .when('/groupIns/jbd/convenientClient', {
            templateUrl: 'modules/groupIns/convenientClient.html',
            controller: 'convenientClientCtr'
        })
        .when('/groupIns/jbd/globalRescue', {
            templateUrl: 'modules/groupIns/globalRescue.html',
            controller: 'globalRescueCtr'
        })
        .when('/groupIns/jbd/vip', {
            templateUrl: 'modules/groupIns/vip.html',
            controller: 'vipCtr'
        })
        .when('/groupIns/jbd/thanksgiving', {
            templateUrl: 'modules/groupIns/thanksgiving.html',
            controller: 'thanksgivingCtr'
        })
}])

.controller('groupInsCtrl', ['$scope', function($scope){

}])

.controller('groupInsPsCtrl', ['$scope', function($scope){

}])

.controller('groupInsCyCtrl', ['$scope', function($scope){

}])

.controller('groupInsJbCtrl', ['$scope', function($scope){

}])

.controller('groupInsSmallTeamProCtrl', ['$scope', function($scope){

}])

.controller('groupInsBigTeamProCtrl', ['$scope', function($scope){

}])

.controller('groupInsTeamInsoCtrl', ['$scope', function($scope){

}])

.controller('groupInsZhtCtrl', ['$scope', function($scope){

}])

.controller('groupInsZytcCtrl', ['$scope', function($scope){

}])

.controller('groupInsYdlCtrl', ['$scope', function($scope){

}])

.controller('insuranceProductsCtr', ['$scope', function($scope){

}])
.controller('eServiceCtr', ['$scope', function($scope){

}])
.controller('omnibusServiceCtr', ['$scope', function($scope){

}])
.controller('clientServiceCtr', ['$scope', function($scope){

}])
.controller('focusHomeworkCtr', ['$scope', function($scope){

}])
.controller('convenientClientCtr', ['$scope', function($scope){

}])
.controller('globalRescueCtr', ['$scope', function($scope){

}])
.controller('vipCtr', ['$scope', function($scope){

}])
.controller('thanksgivingCtr', ['$scope', function($scope){

}])