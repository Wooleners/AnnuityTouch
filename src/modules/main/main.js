    angular.module('annuityApp.main', ['ngRoute'])

        .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
            //$locationProvider.html5Mode(true);
            $routeProvider
                .when('/main', {
                    templateUrl: 'modules/main/main.html',
                    controller: 'mainCtrl'
                });
        }])

        .controller('mainCtrl', ['$scope', 'infoService', function($scope, infoService){

            initSwipe();
            $scope.title = '平安养老险',

            $scope.slides = [{
                id: 1,
                img: '/app_images/wap/v30/c3/yanglaoxian/touch/img1.jpg'
            }];

            //mode init

            $scope.tabs = [
            {
                title: '最新资讯',
                channel_id: 212,
                on: true
            },
            {
                title: '视点聚集',
                channel_id: 162,
                on: false
            },
            {
                title: '高端视点',
                channel_id: 211,
                on: false
            },
            {
                title: '高端论述',
                channel_id: 163,
                on: false
            }
            ];

            $scope.infoList = [];

            initInfoList();

            $scope.toggleTabs = function(index){
                //fliter
                if(!!$scope.tabs[index].on){
                    return;
                }
                $scope.tabs.forEach(function(tab, num){
                    num == index ? $scope.tabs[num].on = true : $scope.tabs[num].on = false;
                });
                loadRemoteData({
                    method: 'articleList',
                    channelId: $scope.tabs[index].channel_id,
                    channelLevel: 2,
                    number: 5
                });
            }

            //init infoList
            function initInfoList(){
                loadRemoteData({
                    method: "articleList",
                    channelId: $scope.tabs[0].channel_id,
                    channelLevel: 2,
                    number: 5
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

            function initSwipe(){
                setTimeout(function(){
                    var adSwiper = new Swiper('#p_rolling',{
                        //Your options here:
                        mode:'horizontal',
                        loop: true,
                        autoplay: 3000,
                        autoplayDisableOnInteraction: false,
                        onSlideChangeEnd: function(self){
                            $("#p_rolling_arrows").find("li")
                            .eq(self.activeLoopIndex).addClass("arrow")
                            .siblings().removeClass("arrow");
                        }
                        //etc..
                    });
                    var toolsSwiper = new Swiper('#p_tools', {
                        mode: 'horizontal',
                        loop: true,
                        onSlideChangeEnd: function(self){
                            $("#p_tools_arrows").find("li")
                            .eq(self.activeLoopIndex).addClass("arrow")
                            .siblings().removeClass("arrow");
                        }
                    });



                },300);
            }

        }]);
