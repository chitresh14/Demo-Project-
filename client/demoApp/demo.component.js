'use strict';

// Register `mainApp` component, along with its associated controller and template
angular.
  module('mainModule').
  component('mainApp', {
    templateUrl: './demoApp/demo.component.html',
    controller: [
      function mainAppController() {
        console.log("QWERTY!!!!!!!!!!")
      }
    ]
  });
