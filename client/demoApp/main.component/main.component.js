'use strict';

// Register `mainComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('mainComponent', {
    templateUrl: '/demoApp/main.component/main.component.html',
    controller: ["$scope",
        function mainController($scope) {
            var mainVm = this;
            mainVm.cardDetails = [{
                "title": "Admin Master Page",
                "details": "Component contains admin master content cards and details of it.",
                "btnTitle": "Click Here",
                "navigateTo": "/masterAdmin"
            },
            {
                "title": "Avatars",
                "details": "Sed et odio in purus dapibus pulvinar. Aliquam erat volutpat. Nullam interdum placerat ligula in hendrerit.",
                "btnTitle": "Click Here 2",
                "navigateTo": "/avatarUpload"
            },
            {
                "title": "Title 3",
                "details": "Aliquam at porta dolor. Sed et odio in purus dapibus pulvinar. Aliquam erat volutpat. Nullam interdum placerat ligula in hendrerit.",
                "btnTitle": "Click Here 3",
                "navigateTo": "/adminMaster2"
            },
            {
                "title": "Title 4",
                "details": "Aliquam at porta dolor. Sed et odio in purus dapibus pulvinar. Aliquam erat volutpat. Nullam interdum placerat ligula in hendrerit.",
                "btnTitle": "Click Here 4",
                "navigateTo": "/adminMaster3"
            }]
        }
    ]
});