    angular.module('annuityApp.static', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/static/guide', {
                templateUrl: 'modules/static/guide.html',
                controller: 'guideCtrl'
            })
            .when('/static/infoReveal', {
                templateUrl: 'modules/static/infoReveal.html',
                controller: 'infoRevealCtrl'
            })
            .when('/static/proandvison', {
                templateUrl: 'modules/static/proandvison.html',
                controller: 'proandvisonCtrl'
            })
            .when('/static/companyOverview', {
                templateUrl: 'modules/static/companyOverview.html',
                controller: 'companyOverviewCtrl'
            })
            .when('/static/goverSumm', {
                templateUrl: 'modules/static/goverSumm.html',
                controller: 'goverSummCtrl'
            })
            .when('/static/yearInfoReveal', {
                templateUrl: 'modules/static/yearInfoReveal.html',
                controller: 'yearInfoRevealCtrl'
            })
            .when('/static/majorMatter', {
                templateUrl: 'modules/static/majorMatter.html',
                controller: 'majorMatterCtrl'
            })
            .when('/static/majorBuss', {
                templateUrl: 'modules/static/majorBuss.html',
                controller: 'majorBussCtrl'
            })
            .when('/static/entManage', {
                templateUrl: 'modules/static/entManage.html',
                controller: 'entManageCtrl'
            })
            .when('/static/entDuty', {
                templateUrl: 'modules/static/entDuty.html',
                controller: 'entDutyCtrl'
            })
            .when('/static/entEquals', {
                templateUrl: 'modules/static/entEquals.html',
                controller: 'entEqualsCtrl'
            })
            .when('/static/entManageEvalSys', {
                templateUrl: 'modules/static/entManageEvalSys.html',
                controller: 'entManageEvalSysCtrl'
            })
            .when('/static/entManageExp', {
                templateUrl: 'modules/static/entManageExp.html',
                controller: 'entManageExpCtrl'
            })
            .when('/static/entManagePlan', {
                templateUrl: 'modules/static/entManagePlan.html',
                controller: 'entManagePlanCtrl'
            })
            .when('/static/entManageSys', {
                templateUrl: 'modules/static/entManageSys.html',
                controller: 'entManageSysCtrl'
            })
            .when('/static/entManageTeam', {
                templateUrl: 'modules/static/entManageTeam.html',
                controller: 'entManageTeamCtrl'
            })
            .when('/static/entPlanflow', {
                templateUrl: 'modules/static/entPlanflow.html',
                controller: 'entPlanflowCtrl'
            })
            .when('/static/entTec', {
                templateUrl: 'modules/static/entTec.html',
                controller: 'entTecCtrl'
            })
            .when('/static/investManage', {
                templateUrl: 'modules/static/investManage.html',
                controller: 'investManageCtrl'
            })
            .when('/static/investBestAbility', {
                templateUrl: 'modules/static/investBestAbility.html',
                controller: 'investBestAbilityCtrl'
            })
            .when('/static/investBestIdea', {
                templateUrl: 'modules/static/investBestIdea.html',
                controller: 'investBestIdeaCtrl'
            })
            .when('/static/investManageExp', {
                templateUrl: 'modules/static/investManageExp.html',
                controller: 'investManageExpCtrl'
            })
            .when('/static/investManageIntroduce', {
                templateUrl: 'modules/static/investManageIntroduce.html',
                controller: 'investManageIntroduceCtrl'
            })
            .when('/static/investPower', {
                templateUrl: 'modules/static/investPower.html',
                controller: 'investPowerCtrl'
            })
            .when('/static/investServerLevel', {
                templateUrl: 'modules/static/investServerLevel.html',
                controller: 'investServerLevelCtrl'
            })
            .when('/static/accountsManage', {
                templateUrl: 'modules/static/accountsManage.html',
                controller: 'accountsManageCtrl'
            })
            .when('/static/accountsManageflow', {
                templateUrl: 'modules/static/accountsManageflow.html',
                controller: 'accountsManageflowCtrl'
            })
            .when('/static/accountsManageGoodness',{
                templateUrl: 'modules/static/accountsManageGoodness.html',
                controller: 'accountsManageGoodnessCtrl'
            })
            .when('/static/accountsManageOutfit',{
                templateUrl: 'modules/static/accountsManageOutfit.html',
                controller: 'accountsManageOutfitCtrl'
            })
            .when('/static/accountsManageServer',{
                templateUrl: 'modules/static/accountsManageServer.html',
                controller: 'accountsManageServerCtrl'
            })
            .when('/static/accountsManageTeam',{
                templateUrl: 'modules/static/accountsManageTeam.html',
                controller: 'accountsManageTeamCtrl'
            })
            .when('/static/operationsManage', {
                templateUrl: 'modules/static/operationsManage.html',
                controller: 'operationsManageCtrl'
            })
            .when('/static/operationsIntroduce', {
                templateUrl: 'modules/static/operationsIntroduce.html',
                controller: 'operationsIntroduceCtrl'
            })
            .when('/static/operationsGoodness', {
                templateUrl: 'modules/static/operationsGoodness.html',
                controller: 'operationsGoodnessCtrl'
            })
            .when('/static/clientServer', {
                templateUrl: 'modules/static/clientServer.html',
                controller: 'clientServerCtrl'
            })
            .when('/static/clientServerPros', {
                templateUrl: 'modules/static/clientServerPros.html',
                controller: 'clientServerProsCtrl'
            })
            .when('/static/clientServerWays', {
                templateUrl: 'modules/static/clientServerWays.html',
                controller: 'clientServerWaysCtrl'
            })
            .when('/static/surplusManage', {
                templateUrl: 'modules/static/surplusManage.html',
                controller: 'surplusManageCtrl'
            })
            .when('/static/surplusContact', {
                templateUrl: 'modules/static/surplusContact.html',
                controller: 'surplusContactCtrl'
            })
            .when('/static/surplusCost', {
                templateUrl: 'modules/static/surplusCost.html',
                controller: 'surplusCostCtrl'
            })
            .when('/static/surplusIntroduce', {
                templateUrl: 'modules/static/surplusIntroduce.html',
                controller: 'surplusIntroduceCtrl'
            })
            .when('/static/surplusServer', {
                templateUrl: 'modules/static/surplusServer.html',
                controller: 'surplusServerCtrl'
            })
            .when('/static/proSolution', {
                templateUrl: 'modules/static/proSolution.html',
                controller: 'proSolutionCtrl'
            })
            .when('/static/proSolutionChat', {
                templateUrl: 'modules/static/proSolutionChat.html',
                controller: 'proSolutionChatCtrl'
            })
            .when('/static/proSolutionEnt', {
                templateUrl: 'modules/static/proSolutionEnt.html',
                controller: 'proSolutionEntCtrl'
            })
            .when('/static/proSolutionExpOne', {
                templateUrl: 'modules/static/proSolutionExpOne.html',
                controller: 'proSolutionExpOneCtrl'
            })
            .when('/static/proSolutionExpTwo', {
                templateUrl: 'modules/static/proSolutionExpTwo.html',
                controller: 'proSolutionExpTwoCtrl'
            })
            .when('/static/proSolutionExpThr', {
                templateUrl: 'modules/static/proSolutionExpThr.html',
                controller: 'proSolutionExpThrCtrl'
            })
            .when('/static/proSolutionInvest', {
                templateUrl: 'modules/static/proSolutionInvest.html',
                controller: 'proSolutionInvestCtrl'
            })
            .when('/static/proSolutionNice', {
                templateUrl: 'modules/static/proSolutionNice.html',
                controller: 'proSolutionNiceCtrl'
            })
            .when('/static/proSolutionNotWorry', {
                templateUrl: 'modules/static/proSolutionNotWorry.html',
                controller: 'proSolutionNotWorryCtrl'
            })
            .when('/static/proSolutionShare', {
                templateUrl: 'modules/static/proSolutionShare.html',
                controller: 'proSolutionShareCtrl'
            })
            .when('/static/proSolutionShit', {
                templateUrl: 'modules/static/proSolutionShit.html',
                controller: 'proSolutionShitCtrl'
            })
            .when('/static/proSolutionSuccessExp', {
                templateUrl: 'modules/static/proSolutionSuccessExp.html',
                controller: 'proSolutionSuccessExpCtrl'
            })
            .when('/static/annuityKnowledge', {
                templateUrl: 'modules/static/annuityKnowledge.html',
                controller: 'annuityKnowledgeCtrl'
            })
            .when('/static/knowledgeOne', {
                templateUrl: 'modules/static/annuityKnowledgeOne.html',
                controller: 'annuityKnowledgeOCtrl'
            })
            .when('/static/knowledgeTwo', {
                templateUrl: 'modules/static/annuityKnowledgeTwo.html',
                controller: 'annuityKnowledgeTCtrl'
            })
            .when('/static/knowledgeThr', {
                templateUrl: 'modules/static/annuityKnowledgeThr.html',
                controller: 'annuityKnowledgeRCtrl'
            })
            .when('/static/knowledgeFou', {
                templateUrl: 'modules/static/annuityKnowledgeFou.html',
                controller: 'annuityKnowledgeFCtrl'
            })
            .when('/static/shareMeetReport', {
                templateUrl: 'modules/static/shareMeetReport.html',
                controller: 'shareMeetReportCtrl'
            })
            .when('/static/dsjl', {
                templateUrl: 'modules/static/dsjl.html',
                controller: 'dsjlCtrl'
            })
            .when('/static/jsjl', {
                templateUrl: 'modules/static/jsjl.html',
                controller: 'jsjlCtrl'
            })
            .when('/static/gjjl', {
                templateUrl: 'modules/static/gjjl.html',
                controller: 'gjjlCtrl'
            })
            .when('/static/zygd', {
                templateUrl: 'modules/static/zygd.html',
                controller: 'zygdCtrl'
            })
            .when('/static/bmsz', {
                templateUrl: 'modules/static/bmsz.html',
                controller: 'bmszCtrl'
            })
    }])

    .controller('bmszCtrl', ['$scope', function($scope){

    }])

    .controller('zygdCtrl', ['$scope', function($scope){

    }])

    .controller('gjjlCtrl', ['$scope', function($scope){

    }])

    .controller('jsjlCtrl', ['$scope', function($scope){

    }])

    .controller('dsjlCtrl', ['$scope', function($scope){

    }])

    .controller('shareMeetReportCtrl', ['$scope', 'infoService', function($scope, infoService){
        //default config
        $scope.infoList = [];

        initInfoList();

        //init infoList
        function initInfoList(){
            loadRemoteData({
                method: "articleList",
                channelId: 1062,
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

    .controller('annuityKnowledgeOCtrl', ['$scope', function($scope){

    }])

    .controller('annuityKnowledgeTCtrl', ['$scope', function($scope){

    }])

    .controller('annuityKnowledgeRCtrl', ['$scope', function($scope){

    }])

    .controller('annuityKnowledgeFCtrl', ['$scope', function($scope){

    }])

    .controller('guideCtrl', ['$scope', function($scope){

    }])

    .controller('infoRevealCtrl', ['$scope', function($scope){

    }])

    .controller('companyOverviewCtrl', ['$scope', function($scope){

    }])

    .controller('goverSummCtrl', ['$scope', function($scope){

    }])

    .controller('yearInfoRevealCtrl', ['$scope', 'infoService', function($scope, infoService){

        $scope.title = "年度信息披露";
        $scope.infoList = [];

        initInfoList();

        //init infoList
        function initInfoList(){
            loadRemoteData({
                method: "articleList",
                channelId: 643,
                channelLevel: 2,
                number: 10
            });
        }

        function applyRemoteData(data){
            $scope.infoList = data.articleList;
        }

        function loadRemoteData(params){
            infoService.getInfoList(params).then(function(data){
                applyRemoteData(data);
            });
        }
    }])

    .controller('entManageCtrl', ['$scope', function($scope){

    }])

    .controller('entEqualsCtrl', ['$scope', function($scope){

    }])

    .controller('entDutyCtrl', ['$scope', function($scope){

    }])

    .controller('entManageEvalSysCtrl', ['$scope', function($scope){

    }])

    .controller('entManageExpCtrl', ['$scope', function($scope){

    }])

    .controller('entManagePlanCtrl', ['$scope', function($scope){

    }])

    .controller('entManageSysCtrl', ['$scope', function($scope){

    }])

    .controller('entManageTeamCtrl', ['$scope', function($scope){

    }])

    .controller('investManageCtrl', ['$scope', function($scope){

    }])

    .controller('investBestAbilityCtrl', ['$scope', function($scope){

    }])

    .controller('investBestIdeaCtrl', ['$scope', function($scope){

    }])

    .controller('investManageExpCtrl', ['$scope', function($scope){

    }])

    .controller('investManageIntroduceCtrl', ['$scope', function($scope){

    }])

    .controller('investPowerCtrl', ['$scope', function($scope){

    }])

    .controller('investServerLevelCtrl', ['$scope', function($scope){

    }])

    .controller('accountsManageCtrl', ['$scope', function($scope){

    }])

    .controller('accountsManageflowCtrl', ['$scope', function($scope){

    }])

    .controller('accountsManageGoodnessCtrl', ['$scope', function($scope){

    }])

    .controller('accountsManageOutfitCtrl', ['$scope', function($scope){

    }])

    .controller('accountsManageServerCtrl', ['$scope', function($scope){

    }])

    .controller('accountsManageTeamCtrl', ['$scope', function($scope){

    }])

    .controller('operationsManageCtrl', ['$scope', function($scope){

    }])

    .controller('operationsIntroduceCtrl', ['$scope', function($scope){

    }])

    .controller('operationsGoodnessCtrl', ['$scope', function($scope){

    }])

    .controller('clientServerCtrl', ['$scope', function($scope){

    }])

    .controller('clientServerWaysCtrl', ['$scope', function($scope){

    }])

    .controller('clientServerProsCtrl', ['$scope', function($scope){

    }])

    .controller('surplusManageCtrl', ['$scope', function($scope){

    }])

    .controller('surplusContactCtrl', ['$scope', function($scope){

    }])

    .controller('surplusIntroduceCtrl', ['$scope', function($scope){

    }])

    .controller('surplusServerCtrl', ['$scope', function($scope){

    }])

    .controller('surplusCostCtrl', ['$scope', function($scope){

    }])

    .controller('proSolutionCtrl', ['$scope', function($scope){

    }])

    .controller('proSolutionChatCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
        //from hooks
        var hooks = {
            "inner": function(){
                $scope.backLink = "#/static/proSolutionEnt";
            },
            "outer": function(){
                $scope.backLink = "#/static/proSolution";
            },
            "direct": function(){
                $scope.backLink = "#/main";
            }
        };

        //default $scope
        $scope.backLink = "";

        (!! $routeParams.from && hooks[$routeParams.from] || hooks["direct"])();

    }])

    .controller('proSolutionEntCtrl', ['$scope', function($scope){

    }])

    .controller('proSolutionExpOneCtrl', ['$scope', function($scope){

    }])

    .controller('proSolutionExpTwoCtrl', ['$scope', function($scope){

    }])

    .controller('proSolutionExpThrCtrl', ['$scope', function($scope){

    }])

    .controller('proSolutionInvestCtrl', ['$scope', function($scope){

    }])

    .controller('proSolutionNiceCtrl', ['$scope', function($scope){

    }])

    .controller('proSolutionNotWorryCtrl', ['$scope', function($scope){

    }])

    .controller('proSolutionShareCtrl', ['$scope', '$routeParams', function($scope, $routeParams){

            //from hooks
            var hooks = {
                "inner": function(){
                    $scope.backLink = "#/static/proSolutionEnt";
                },
                "outer": function(){
                    $scope.backLink = "#/static/proSolution";
                },
                "direct": function(){
                    $scope.backLink = "#/main";
                }
            };

            //default $scope
            $scope.backLink = "";

            (!! $routeParams.from && hooks[$routeParams.from] || hooks["direct"])();
    }])

    .controller('proSolutionShitCtrl', ['$scope', function($scope){

    }])

    .controller('proSolutionSuccessExpCtrl', ['$scope', function($scope){

    }])

    .controller('annuityKnowledgeCtrl', ['$scope', function($scope){

    }])

    .controller('majorMatterCtrl', ['$scope', 'infoService', function($scope, infoService){
        $scope.title = "重大事件";
        $scope.infoList = [];

        initInfoList();

        //init infoList
        function initInfoList(){
            loadRemoteData({
                method: "articleList",
                channelId: 644,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data){
            $scope.infoList = data.articleList;
        }

        function loadRemoteData(params){
            infoService.getInfoList(params).then(function(data){
                applyRemoteData(data);
            });
        }
    }])

    .controller('majorBussCtrl', ['$scope', 'infoService', function($scope, infoService){
        $scope.title = "重大事件";
        $scope.infoList = [];

        initInfoList();

        //init infoList
        function initInfoList(){
            loadRemoteData({
                method: "articleList",
                channelId: 645,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data){
            $scope.infoList = data.articleList;
        }

        function loadRemoteData(params){
            infoService.getInfoList(params).then(function(data){
                applyRemoteData(data);
            });
        }
    }])

    .controller('proandvisonCtrl', ['$scope', 'infoService', function($scope, infoService){
        $scope.title = "产品和条款";
        $scope.infoList = [];

        initInfoList();

        //init infoList
        function initInfoList(){
            loadRemoteData({
                method: "articleList",
                channelId: 1068,
                channelLevel: 2,
                number: 20
            });
        }

        function applyRemoteData(data){
            $scope.infoList = data.articleList;
        }

        function loadRemoteData(params){
            infoService.getInfoList(params).then(function(data){
                applyRemoteData(data);
            });
        }
    }])
