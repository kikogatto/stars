'use strict';
/* global angular, jasmine, describe, it, xit, expect, module, inject, beforeEach, spyOn */


describe('The Stars module', function() {
    var httpProvider;
    var $route;

    beforeEach( module('stars', function($httpProvider) {
        httpProvider = $httpProvider;
    }));

    beforeEach(inject(function( _$route_) {
        $route = _$route_;
    }));

    it('should have these requirements', function() {
        var openFlame = angular.module('stars');
        expect(openFlame.requires.length).toBe(4);
        expect(openFlame.requires).toContain('ngRoute');
        expect(openFlame.requires).toContain('ngResource');
        expect(openFlame.requires).toContain('ngAnimate');
        expect(openFlame.requires).toContain('ngSanitize');
    });

});

