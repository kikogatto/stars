
'use strict';
/* global angular */

/************************************************************************************************
 * Module definition
 ************************************************************************************************/
var starsModule = angular.module('stars', ['ngRoute', 'ngResource', 'ngAnimate', 'ngSanitize',
 
 //'compiledTemplates'
 ]);

starsModule.config( ['$routeProvider', function ( $routeProvider ) {
    $routeProvider.when('/', {redirectTo: '/feedback'})
    .when('/feedback', { templateUrl: 'feedback.html', controller: 'feedbackController' })
    // .when('/signup', { templateUrl: 'signup.html', controller: 'emptyController' })
    // .when('/signin', { templateUrl: 'signin.html', controller: 'emptyController' });
}]);

starsModule.run(['$rootScope', '$location', '$timeout', function($rootScope, $location, $timeout) {
    // $rootScope.$on('OpenFlame.authenticated', function( e ) {
    //     $location.path('/');
    // });
    // $rootScope.$on('OpenFlame.authentication.failed', function( e ) {
    //     $location.path('/signin');
    // });

    // $rootScope.$on('OpenFlame.authorization.denied', function( e, args) {
    //     $location.path('/identities');
    // });
    // $rootScope.$on('OpenFlame.userSignOut', function( e, args) {
    //     $location.path('/');
    // });
}]);

// ***********************************************************************************************
//  * Controllers
//  ***********************************************************************************************
starsModule.controller('feedbackController', ['$scope', function ($scope) {
    $scope.result = {
        points:0,
        comments:''
    };
}]);


// ***********************************************************************************************
//  * Directives
//  ***********************************************************************************************
starsModule.directive('grades', [  function () {
    return {
        restrict: 'EA',
        templateUrl:  'grades.html',
        replace: true,
        scope: {},
        link: function (scope, iElement, iAttrs) {
            var icons = ['fa-star-o', 'fa-star-half-o', 'fa-star'];
            var max = 5;
            scope.value = 0;

            var getGrade = function(index) {
                if( scope.value <= index ) {
                    return icons[0];
                }
                if( scope.value - index <1 ) {
                    return icons[1];
                }
                return icons[ 2 ]
            };

            scope.getGrades = function() {
                var grades = [];
                for( var i =0; i < max; i++ ) {
                    grades.push( getGrade(i) );
                }
                return grades;
            };

            scope.setValue= function( index ){
                scope.value = index+1;
            };
        }
    };
}]);