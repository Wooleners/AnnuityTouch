angular.module('annuityApp.infoService', []).factory('infoService',['$http', '$q', function($http, $q){

    // customize url
    // toggle test or deploy
    var url = 'http://www.pingan.com/cms-tmplt/portalJsonpController.do?callback=JSON_CALLBACK';

    var getList = function(params){
        var request = $http({
            method: "jsonp",
            url: url,
            params: params
        });
        return( request.then( handleSuccess, handleError ) );
    };

    var getInfo = function(params){
        var request = $http({
            method: "jsonp",
            url: url,
            params: params
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function handleError( response ) {

        if (! angular.isObject( response.data ) ||! response.data.message) {

            return( $q.reject( "An unknown error occurred." ) );

        }

        // Otherwise, use expected error message.
        return( $q.reject( response.data.message ) );

    }

    function handleSuccess( response ) {
        return( response.data );

    }

    //can top first
    return {
      'getInfoList': getList,
      'getDetails': getInfo
    };

}])
