'use strict';

// Register `avatarUploadComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('avatarUploadComponent', {
    templateUrl: '/demoApp/main.component/avatar-upload.component/avatar-upload.component.html',
    controller: ["$scope",
        function avatarUploadController($scope) {
            var avatarVm = this;

            avatarVm.candidateDetails = {
                "designation": "Developer",
                "default-avatar": "data:image/png;base64,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",
                "user-photo": null
            }

            //Method to initialize the onInit hook.
            function onInit() {
                if (avatarVm.candidateDetails && avatarVm.candidateDetails['user-photo']) {
                    avatarVm.userAvatar = avatarVm.candidateDetails['user-photo'];
                } else {
                    avatarVm.userAvatar = avatarVm.candidateDetails['default-avatar'];
                }
            }

            avatarVm.uploadAvatar = function() {
                $("#avatarUploadInput").click();
            }

            function getElmtById(id) { return document.getElementById(id); }

            function readImage() {

                if (this.files && this.files[0] && fileValidation(this.files[0])) {
                    var fileReader = new FileReader();
                    fileReader.onload = function(e) {
                        getElmtById("avatarImage").src = e.target.result;
                    };

                    fileReader.readAsDataURL(this.files[0]);
                }
            }

            getElmtById("avatarUploadInput").addEventListener("change", readImage, false);

            function fileValidation(fileDetails) {
            	console.log(fileDetails)
                if (fileDetails['name'] && fileDetails['size']) {
                    // Allowing file type JPG, JPEG or PNG.
                    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

                    if (!allowedExtensions.exec(fileDetails['name'])) {
                        alert('Invalid file type. Please upload JPG, JPEG or PNG file type.');
                        return false;
                    } else if (fileDetails['size'] >= 50001) {
                        alert("File size is greater than 50KB. Please upload the file with size less than 50KB.");
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    alert('Problem while uploading the file. Please upload correct file.');
                    return false;
                }
            }

            avatarVm.$onInit = onInit();
        }
    ]
});