'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('representatives example page', {
            url: '/representatives/example',
            templateUrl: 'representatives/views/index.html'
        });
    }
]);
