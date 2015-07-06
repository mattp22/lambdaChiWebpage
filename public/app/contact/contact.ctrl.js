(function(module) {

    function ContactCtrl($scope) {
        var vm = this;

        vm.info = [
            {
                name: "President - Paolo Guma",
                phone: "908-255-0815",
                email: "Paolo31@vt.edu"
            },
            {
                name: "Internal Vice President - Blake Duncan",
                phone: "571-926-2320",
                email: "blake94@vt.edu"
            },
            {
                name: "External Vice President - Christopher Connors",
                phone: "703-254-4507",
                email: "Cchri12@vt.edu"
            },
            {
                name: "Treasurer - James Chapman",
                phone: "484-643-2705",
                email: "jamesc12@vt.edu"
            },
            {
                name: "Rush Chair - Peter Burns",
                phone: "804-855-8555",
                email: "Pburns7@vt.edu"
            },
            {
                name: "Rush Chair - Brian Heffernan",
                phone: "864-612-8745",
                email: "bheff@vt.edu"
            },
            {
                name: "Alumni Secretary - Theo Jolley",
                phone: "540-850-7911",
                email: "tjolley7@vt.edu"
            }
        ];
    }

    module.controller('ContactCtrl', ContactCtrl);
})(angular.module('app.contact'));