'use strict';

eventsApp.directive('gravatar', gravatar);

function gravatar(gravatarUrlBuilder) {
    return {
        restrict: 'E',
        template: '<img />',
        replace: true,
        link: function (scope, element, attrs, controller) {
            attrs.$observe('email', function (newValue, oldValue) {
                if(newValue !== oldValue)
                {
                    attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
                }
            });
        }
    }
}
