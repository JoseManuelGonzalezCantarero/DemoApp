'use strict';

eventsApp.controller('EditProfileController', EditProfileController);

function EditProfileController($scope, gravatarUrlBuilder, userData)
{
    $scope.user = {};

    $scope.saveUser = function (user, profileForm)
    {
        if(profileForm.$valid)
        {
            userData.save(user)
                .$promise
                .then(function (response) {console.log('success', response)})
                .catch(function (response) { console.log('failure', response)});
        }
    };

    $scope.getGravatarUrl = function(email)
    {
        return gravatarUrlBuilder.buildGravatarUrl(email);
    };

    $scope.cancelEdit = function () {
        window.location = "/events";
    };
}