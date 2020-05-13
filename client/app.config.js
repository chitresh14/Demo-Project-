'use strict';

angular.
  module('demoApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true).hashPrefix('*');
      $routeProvider.
        when('/demo', {
          template: '<main-app></main-app>'
        }).
        when('/masterAdmin', {
          template: '<master-admin-component style="background-color: #f5f5f5;"></master-admin-component>'
        }).
        when('/avatarUpload', {
          template: '<avatar-upload-component></avatar-upload-component>'
        }).
        otherwise('/demo');
    }
  ]);
