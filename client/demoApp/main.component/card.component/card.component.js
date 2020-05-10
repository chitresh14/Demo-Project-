// 'use strict';

// // Register `mainCardComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('mainCardComponent', {
    bindings: { cardContents: "<" },
    templateUrl: '/demoApp/main.component/card.component/card.component.html',
    controller: ["$scope",
        function mainCardController($scope) {
            var mainCardVm = this;
            // this.$onInit = function() {
            //     console.log("cardContents:::::::",mainCardVm.cardContents);
            // };
        }
    ]
});