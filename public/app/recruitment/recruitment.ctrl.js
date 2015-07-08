(function(module) {

    function RecruitmentCtrl($scope) {
        var vm = this;

        var e1 = {
            heading: "Greek 101",
            date: "Monday Jan. 26th",
            location: "Owens Banquet Hall",
            time: "6pm - 8pm",
            description: "Come by and check out our booth where you can meet our rush chairs Peter Burns and Brian Heffernan as well as other brothers. Ask questions about rush and gain more information on the other events that will come up later in the week.",
            image: "app/recruitment/images/e1.jpg"
        };

        var e2 = {
            heading: "Pizza at Pritchard Quad",
            date: "Tuesday Jan. 27th",
            location: "Pritchard Quad",
            time: "4pm - 6pm",
            description: "Pizza and Handshakes at the Pritchard Quad. Bring your roommates and come meet the brotherhood in our first event of rush.",
            image: "app/recruitment/images/e2.jpg"
        };

        var e3 = {
            heading: "TOTS",
            date: "Thursday Jan. 29th ",
            location: "Top of The Stairs",
            time: "4pm - 6pm",
            description: "Come get some great free food and meet the brothers at TOTS. Once again, FREE food.",
            image: "app/recruitment/images/e3.jpg"
        };

        var e4 = {
            heading: "Gentlemen's Night",
            date: "Monday Feb. 2nd",
            location: "Lambda Chi House",
            time: "6pm - 8pm",
            description: "This will be our biggest event so please make an effort to stop by. Shirt and tie required. Come enjoy cigars with the brothers of Lambda Chi.",
            image: "app/recruitment/images/e4.jpg"
        };

        var e5 = {
            heading: "Jersey Day",
            date: "Wednesday Feb. 4th",
            location: "Lambda Chi House",
            time: "5pm - 7pm",
            description: "Volleyball and BBQ at the house, come wearing your favorite jersey. Yet again, FREE food.",
            image: "app/recruitment/images/e5.jpg"
        };

        var e6 = {
            heading: "Closed Rush",
            image: "app/recruitment/images/e6.jpg"
        };

        vm.events = [
            e1,
            e2,
            e3,
            e4,
            e5,
            e6
        ];

        vm.delta = [
            {
                name: "Peter Burns",
                info: [
                    "Rush Chair",
                    "High Delta",
                    "Senior"
                ],
                img: "pete.jpg"
            },
            {
                name: "Brian Heffernan",
                info: [
                    "Rush Chair",
                    "Low Delta",
                    "Junior"
                ],
                img: "brian.jpg"
            }
        ];
    }

    module.controller('RecruitmentCtrl', RecruitmentCtrl);
})(angular.module('app.recruitment'));
