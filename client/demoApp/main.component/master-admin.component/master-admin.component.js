'use strict';

// // Register `masterAdminComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('masterAdminComponent', {
    templateUrl: '/demoApp/main.component/master-admin.component/master-admin.component.html',
    controller: ["$scope", "$window",
        function mainCardController($scope, $window) {
            var masterAdminVm = this;

            //Method to initialize the onInit Cycle
            masterAdminVm.$onInit = function() {
                if ($(window) && $(window).length && $(window)[0]['innerHeight']) {
                    masterAdminVm.screenHeight = $(window)[0]['innerHeight'];
                }
            };

            masterAdminVm.cardContents = [{
                "title": "Bank Parameter",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Bank Parameter 1",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Bank Parameter 2",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Bank Parameter 3",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Bank Parameter 4",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Bank Parameter 5",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            }]
        }
    ]
});