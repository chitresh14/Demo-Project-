'use strict';

// // Register `masterAdminComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('masterAdminComponent', {
    templateUrl: '/demoApp/main.component/master-admin.component/master-admin.component.html',
    controller: ["$scope", "$window", "$filter",
        function mainCardController($scope, $window, $filter) {
            var masterAdminVm = this;

            //Method to initialize the onInit Cycle
            masterAdminVm.$onInit = function() {
                if ($(window) && $(window).length && $(window)[0]['innerHeight']) {
                    masterAdminVm.screenHeight = $(window)[0]['innerHeight'];
                }
            };

            masterAdminVm.showMsg = function(msg){
            	alert(msg);
            }

            masterAdminVm.cardContents = [{
                "title": "Bank Parameter",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Holiday",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/calendar-minus-solid.svg"
            },{
                "title": "Dummy Title 1",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/calendar-minus-solid.svg"
            },{
                "title": "Dummy Title 2",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/calendar-minus-solid.svg"
            },{
                "title": "Dummy Title 3",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 4",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 5",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 6",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 7",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 8",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 9",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 10",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 11",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 12",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 13",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 14",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 15",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            },{
                "title": "Dummy Title 16",
                "content": "Icons serve a very similar function to text in a page. In Semantic icons receive a special tag which allow for an abbreviated markup when sitting along-side text.",
                "cardIconPath": "/demoApp/assets/university-solid.svg"
            }]
        }
    ]
});