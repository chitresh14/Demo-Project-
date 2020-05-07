'use strict';

angular.
  module('demoApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/demo', {
          template: '<main-app></main-app>'
        }).
        otherwise('/demo');
    }
  ]);
