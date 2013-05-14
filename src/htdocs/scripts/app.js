"use strict";

// Declare app level module which depends on filters, and services
angular.
    module('qaReview', ['qaReview.filters', 'qaReview.services', 'qaReview.directives', 'qaReview.controllers', 'ui.bootstrap']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'OverviewController'
        });
        $routeProvider.when('/source',{
            templateUrl: 'templates/404.html',
            controller: 'SourceController'
        });
        $routeProvider.when('/metrics/method/:metric',{
            templateUrl: 'templates/metrics.html',
            controller: 'Metrics/Method'
        });
        $routeProvider.when('/metrics/class/:metric',{
            templateUrl: 'templates/metrics.html',
            controller: 'Metrics/Class'
        });
        $routeProvider.when('/metrics/package/:metric',{
            templateUrl: 'templates/metrics.html',
            controller: 'Metrics/Package'
        });
        $routeProvider.otherwise({
            templateUrl: 'templates/404.html'
        });
    }]);
