(function(module) {

    function PhilanthropyCtrl($scope) {
        var vm = this;

        vm.slides = [
            "app/philanthropy/images/IMG_0461.PNG",
            "app/philanthropy/images/IMG_0462.PNG",
            "app/philanthropy/images/IMG_0463.PNG",
            "app/philanthropy/images/IMG_0464.PNG",
            "app/philanthropy/images/IMG_0465.PNG",
            "app/philanthropy/images/IMG_0466.PNG",
            "app/philanthropy/images/IMG_0467.PNG",
            "app/philanthropy/images/IMG_0468.PNG",
            "app/philanthropy/images/IMG_0469.PNG",
            "app/philanthropy/images/IMG_0470.PNG",
        ];
    }

    module.controller('PhilanthropyCtrl', PhilanthropyCtrl);
})(angular.module('app.philanthropy'));