'use strict';

angular.module('mean').controller('RepresentativesController', ['$scope', 'Global',
    function($scope, Global, Representatives) {
        $scope.global = Global;
        $scope.representatives = {
            name: 'representatives'
        };
    }
]);
