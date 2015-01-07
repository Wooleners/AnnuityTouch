    angular.module('annuityApp.delegate', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/delegate', {
                templateUrl: 'modules/delegate/delegate.html',
                controller: 'delegateCtrl'
            })
            .when('/delegate/personal', {
                templateUrl: 'modules/delegate/personal.html',
                controller: 'delegatePersonalCtrl'
            })
            .when('/delegate/team', {
                templateUrl: 'modules/delegate/team.html',
                controller: 'delegateTeamCtrl'
            })
            .when('/delegate/personal/pproBakClause', {
                templateUrl: 'modules/delegate/list.html',
                controller: 'pproBakClauseCtrl'
            })
            .when('/delegate/personal/pproChgMatter', {
                templateUrl: 'modules/delegate/list.html',
                controller: 'pproChgMatterCtrl'
            })
            .when('/delegate/personal/pproBuildBulletin', {
                templateUrl: 'modules/delegate/list.html',
                controller: 'pproBuildBulletinCtrl'
            })
            .when('/delegate/personal/pproRaiseBulletin', {
                templateUrl: 'modules/delegate/list.html',
                controller: 'pproRaiseBulletinCtrl'
            })
            .when('/delegate/personal/pproYearEquityReport', {
                templateUrl: 'modules/delegate/list.html',
                controller: 'pproYearEquityReportCtrl'
            })
            .when('/delegate/personal/prelatedPolicyLaw', {
                templateUrl: 'modules/delegate/list.html',
                controller: 'prelatedPolicyLawCtrl'
            })
            .when('/delegate/personal/pserverGuide', {
                templateUrl: 'modules/delegate/list.html',
                controller: 'pserverGuideCtrl'
            })
            .when('/delegate/team/tproBakClause', {
                templateUrl: 'modules/delegate/list.html',
                controller: 'tproBakClauseCtrl'
            })
            .when('/delegate/team/tproChgMatter', {
                templateUrl: 'modules/delegate/list.html',
                controller: 'tproChgMatterCtrl'
            })
            .when('/delegate/team/tproYearEquityReport', {
                templateUrl: 'modules/delegate/list.html',
                controller: 'tproYearEquityReportCtrl'
            })
            .when('/delegate/team/trelatedPolicyLaw', {
                templateUrl: 'modules/delegate/list.html',
                controller: 'trelatedPolicyLawCtrl'
            })
    }])

    .controller('delegateCtrl', ['$scope', 'infoService', '$routeParams', function($scope, infoService, $routeParams){

        $scope.title = "委托产品";

    }])

    .controller('delegatePersonalCtrl', ['$scope', 'infoService', function($scope, infoService){

    }])

    .controller('delegateTeamCtrl', ['$scope', 'infoService', function($scope, infoService){

    }])

    .controller('pproBakClauseCtrl', ['$scope', 'infoService', function($scope, infoService){

        $scope.title = '产品备案条款';
        $scope.back = 'delegate/personal';

        $scope.infoList = [];
        $scope.infoBufferNum = 20;
        $scope.totalNum = 0;
        $scope.currentTabs = 0;

        initInfoList();
        //init infoList
        function initInfoList() {
            loadRemoteData({
                method: "articleList",
                channelId: 205,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data) {
            $scope.infoList = data.articleList;
            $scope.totalNum = data.totalNum;
        }

        function loadRemoteData(params) {
            infoService.getInfoList(params).then(function(data) {
                applyRemoteData(data);
            });
        }

    }])

    .controller('pproChgMatterCtrl', ['$scope', 'infoService', function($scope, infoService){

        $scope.title = '产品变动事项';
        $scope.back = 'delegate/personal';

        $scope.infoList = [];
        $scope.infoBufferNum = 20;
        $scope.totalNum = 0;
        $scope.currentTabs = 0;

        initInfoList();
        //init infoList
        function initInfoList() {
            loadRemoteData({
                method: "articleList",
                channelId: 599,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data) {
            $scope.infoList = data.articleList;
            $scope.totalNum = data.totalNum;
        }

        function loadRemoteData(params) {
            infoService.getInfoList(params).then(function(data) {
                applyRemoteData(data);
            });
        }

    }])

    .controller('pproBuildBulletinCtrl', ['$scope', 'infoService', function($scope, infoService){

        $scope.title = '产品成立公告';
        $scope.back = 'delegate/personal';

        $scope.infoList = [];
        $scope.infoBufferNum = 20;
        $scope.totalNum = 0;
        $scope.currentTabs = 0;

        initInfoList();
        //init infoList
        function initInfoList() {
            loadRemoteData({
                method: "articleList",
                channelId: 600,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data) {
            $scope.infoList = data.articleList;
            $scope.totalNum = data.totalNum;
        }

        function loadRemoteData(params) {
            infoService.getInfoList(params).then(function(data) {
                applyRemoteData(data);
            });
        }
    }])

    .controller('pproRaiseBulletinCtrl', ['$scope', 'infoService', function($scope, infoService){

        $scope.title = '产品募集公告';
        $scope.back = 'delegate/personal';

        $scope.infoList = [];
        $scope.infoBufferNum = 20;
        $scope.totalNum = 0;
        $scope.currentTabs = 0;

        initInfoList();
        //init infoList
        function initInfoList() {
            loadRemoteData({
                method: "articleList",
                channelId: 602,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data) {
            $scope.infoList = data.articleList;
            $scope.totalNum = data.totalNum;
        }

        function loadRemoteData(params) {
            infoService.getInfoList(params).then(function(data) {
                applyRemoteData(data);
            });
        }
    }])

    .controller('pproYearEquityReportCtrl', ['$scope', 'infoService', function($scope, infoService){
        $scope.title = '产品年度权益报告';
        $scope.back = 'delegate/personal';

        $scope.infoList = [];
        $scope.infoBufferNum = 20;
        $scope.totalNum = 0;
        $scope.currentTabs = 0;

        initInfoList();
        //init infoList
        function initInfoList() {
            loadRemoteData({
                method: "articleList",
                channelId: 602,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data) {
            $scope.infoList = data.articleList;
            $scope.totalNum = data.totalNum;
        }

        function loadRemoteData(params) {
            infoService.getInfoList(params).then(function(data) {
                applyRemoteData(data);
            });
        }
    }])

    .controller('prelatedPolicyLawCtrl', ['$scope', 'infoService', function($scope, infoService){
        $scope.title = '相关政策法规';
        $scope.back = 'delegate/personal';

        $scope.infoList = [];
        $scope.infoBufferNum = 20;
        $scope.totalNum = 0;
        $scope.currentTabs = 0;

        initInfoList();
        //init infoList
        function initInfoList() {
            loadRemoteData({
                method: "articleList",
                channelId: 603,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data) {
            $scope.infoList = data.articleList;
            $scope.totalNum = data.totalNum;
        }

        function loadRemoteData(params) {
            infoService.getInfoList(params).then(function(data) {
                applyRemoteData(data);
            });
        }
    }])

    .controller('pserverGuideCtrl', ['$scope', 'infoService', function($scope, infoService){
        $scope.title = '服务指引';
        $scope.back = 'delegate/personal';

        $scope.infoList = [];
        $scope.infoBufferNum = 20;
        $scope.totalNum = 0;
        $scope.currentTabs = 0;

        initInfoList();
        //init infoList
        function initInfoList() {
            loadRemoteData({
                method: "articleList",
                channelId: 604,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data) {
            $scope.infoList = data.articleList;
            $scope.totalNum = data.totalNum;
        }

        function loadRemoteData(params) {
            infoService.getInfoList(params).then(function(data) {
                applyRemoteData(data);
            });
        }
    }])

    .controller('tproBakClauseCtrl', ['$scope', 'infoService', function($scope, infoService){
        $scope.title = '产品备案条款';
        $scope.back = 'delegate/team';

        $scope.infoList = [];
        $scope.infoBufferNum = 20;
        $scope.totalNum = 0;
        $scope.currentTabs = 0;

        initInfoList();
        //init infoList
        function initInfoList() {
            loadRemoteData({
                method: "articleList",
                channelId: 206,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data) {
            $scope.infoList = data.articleList;
            $scope.totalNum = data.totalNum;
        }

        function loadRemoteData(params) {
            infoService.getInfoList(params).then(function(data) {
                applyRemoteData(data);
            });
        }
    }])

    .controller('tproChgMatterCtrl', ['$scope', 'infoService', function($scope, infoService){
        $scope.title = '产品变动事项';
        $scope.back = 'delegate/team';

        $scope.infoList = [];
        $scope.infoBufferNum = 20;
        $scope.totalNum = 0;
        $scope.currentTabs = 0;

        initInfoList();
        //init infoList
        function initInfoList() {
            loadRemoteData({
                method: "articleList",
                channelId: 605,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data) {
            $scope.infoList = data.articleList;
            $scope.totalNum = data.totalNum;
        }

        function loadRemoteData(params) {
            infoService.getInfoList(params).then(function(data) {
                applyRemoteData(data);
            });
        }
    }])

    .controller('tproYearEquityReportCtrl', ['$scope', 'infoService', function($scope, infoService){
        $scope.title = '产品年度权益报告';
        $scope.back = 'delegate/team';

        $scope.infoList = [];
        $scope.infoBufferNum = 20;
        $scope.totalNum = 0;
        $scope.currentTabs = 0;

        initInfoList();
        //init infoList
        function initInfoList() {
            loadRemoteData({
                method: "articleList",
                channelId: 606,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data) {
            $scope.infoList = data.articleList;
            $scope.totalNum = data.totalNum;
        }

        function loadRemoteData(params) {
            infoService.getInfoList(params).then(function(data) {
                applyRemoteData(data);
            });
        }
    }])

    .controller('trelatedPolicyLawCtrl', ['$scope', 'infoService', function($scope, infoService){
        $scope.title = '相关政策法规';
        $scope.back = 'delegate/team';

        $scope.infoList = [];
        $scope.infoBufferNum = 20;
        $scope.totalNum = 0;
        $scope.currentTabs = 0;

        initInfoList();
        //init infoList
        function initInfoList() {
            loadRemoteData({
                method: "articleList",
                channelId: 607,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data) {
            $scope.infoList = data.articleList;
            $scope.totalNum = data.totalNum;
        }

        function loadRemoteData(params) {
            infoService.getInfoList(params).then(function(data) {
                applyRemoteData(data);
            });
        }
    }]);