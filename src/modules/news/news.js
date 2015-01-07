
    angular.module('annuityApp.news', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/news', {
            templateUrl: 'modules/news/news.html',
            controller: 'newsCtrl'
          });
        }])

        .controller('newsCtrl', ['$scope', 'infoService', '$location', function($scope, infoService, $location) {

            $scope.title = '资讯信息';

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
            $scope.infoBufferNum = 20;
            $scope.totalNum = 0;
            $scope.currentTabs = 0;
            $scope.myScroll = null;

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
                    number: 20
                });
                $scope.currentTabs = index;
                $scope.infoBufferNum = 20;
            }

            //init infoList
            function initInfoList(){
                loadRemoteData({
                    method: "articleList",
                    channelId: $scope.tabs[0].channel_id,
                    channelLevel: 2,
                    number: 20
                });
            }

            function applyRemoteData(data){
                $scope.infoList = data.articleList;
                $scope.totalNum = data.totalNum;
                !!$scope.myScroll ? (function(){
                    $scope.myScroll.destroy();
                    $scope.myScroll = null;
                    iscrollInit();
                }()) : iscrollInit();
            }

            function loadRemoteData(params){
                infoService.getInfoList(params).then(function(data){
                    applyRemoteData(data);
                });
            }

            function iscrollInit(){

                var pullUpEl,
                    pullUpOffset,
                    scroll_in_progress = false;

                function load_content(refresh) {

                    if (refresh) {
                        $scope.myScroll.refresh();
                        pullActionCallback();

                    } else {

                        if ($scope.myScroll) {
                            $scope.myScroll.destroy();
                            $($scope.myScroll.scroller).attr('style', '');
                            $scope.myScroll = null;
                        }
                        trigger_myScroll();

                    }

                };
                function pullUpAction(callback) {
                    load_content('refresh');
                    !!callback ? callback() : false;
                }
                function pullActionCallback() {
                    infoService
                        .getInfoList({
                            method: "articleList",
                            channelId: $scope.tabs[$scope.currentTabs].channel_id,
                            channelLevel: 2,
                            number: $scope.infoBufferNum + 10
                        })
                        .then(function(data){
                            applyRemoteData(data);
                            $scope.infoBufferNum += 10;
                        });
                }

                function trigger_myScroll(offset) {
                    pullUpEl = document.querySelector('#pullUp');
                    if (pullUpEl) {
                        pullUpOffset = pullUpEl.offsetHeight;
                    } else {
                        pullUpOffset = 0;
                    }
                    if ($('#wrapper ul > li').length >= $scope.totalNum) {
                        $('#pullUp').hide();
                        offset = 0;
                    }
                    else{
                        $('#pullUp').show();
                    }
                    if (!offset) {
                        offset = pullUpOffset;
                    }


                    $scope.myScroll = new IScroll('#wrapper', {
                        probeType:1,
                        tap:true,
                        click:false,
                        preventDefaultException:{tagName:/.*/},
                        mouseWheel:true,
                        scrollbars:true,
                        fadeScrollbars:true,
                        interactiveScrollbars:false,
                        keyBindings:false,
                        deceleration:0.0002,
                        startY:(0)
                    });

                    $scope.myScroll.on('scrollStart', function () {
                        scroll_in_progress = true;
                        $(pullUpEl).addClass('flip');
                    });
                    $scope.myScroll.on('scroll', function () {

                        scroll_in_progress = true;

                        if ($('#wrapper ul > li').length <= $scope.totalNum) {
                            if (this.y >= 5 && pullUpEl && !pullUpEl.className.match('flip')) {
                                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松开立即刷新';
                                this.minScrollY = 0;
                            } else if (this.y <= 5 && pullUpEl && pullUpEl.className.match('flip')) {
                                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';
                                this.minScrollY = -pullUpOffspet;
                            }

                        }
                    });
                    $scope.myScroll.on('scrollEnd', function () {
                        if ($('#wrapper ul > li').length < $scope.totalNum) {
                            if (pullUpEl && pullUpEl.className.match('flip')) {
                                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                                pullUpAction();
                            }
                        }
                    });

                    setTimeout(function() {
                        $('#wrapper').css({left:0});
                    }, 100);
                }

                function loaded() {

                    load_content();

                }
                //开启导致退回主屏划不动
                //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


                setTimeout(function(){
                    loaded();
                }, 200);
            }


        }])
