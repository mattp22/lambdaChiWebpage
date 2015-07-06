(function(module) {

    function HomeCtrl($scope) {
        var vm = this;

        var welcome = {
            title: "Welcome",
            date: "Jan. 26 2015",
            text: [
                "Through the vision of Lambda Chi Alpha the Sigma Lambda chapter prepares and encourages collegiate men of good character, high ethics, and noble ideals to contribute positively to the world in which they live."
            ],
            img: "app/home/images/logo.gif"
        };

        var aaron = {
            title: "Thank You!",
            date: "Jan. 26 2015",
            text: [
                "The Virginia Tech, Sigma Lambda, chapter of Lambda Chi Alpha would like to sincerely thank everyone who donated to aid our brother, Aaron O’Connell, in his time of need.",
                "This past semester Aaron could not continue his education because he was diagnosed with cancer and spent the entire semester battling the disease in a hospital in his home state of South Carolina. Aaron’s combination of extraordinary will and mental toughness allowed him to keep his spirits up even in the darkest of moments. He never asked for any assistance through this ordeal, but as a fraternity, and as his brothers, we felt it our responsibility to show our support in his time of need. We opened our fund to the public to see if people would be willing to assist in our efforts and to our surprise we had an influx of responses from individuals, other Lambda Chi Alpha chapters, as well as other Greek organizations.",
                "Because of everyone involved we were able to raise over $12,000 for Aaron. This money went to him and his family to help ease the financial strain brought on from this terrible disease.",
                "-Thank you for your generosity,",
                "Lambda Chi Alpha at Virginia Tech"
            ],
            img: "app/home/images/aaron.jpg"
        };

        var spring15 = {
            title: "Spring 2015",
            date: "Jan. 26 2015",
            text: [
                "I wanted to welcome everyone to a new semester and a new year. 2015 has so far welcomed a new High Zeta and 21 new members into our fraternity. The next two weeks are rush weeks and we will be working hard to recruit good men that will continue to benefit our chapter."
            ],
            headers: [
                "2015 High Zeta",
                "New Members"
            ],
            highZeta: [
                "President – Paolo Guma",
                "Internal Vice President – Blake Duncan",
                "External Vice President – Christopher Connors",
                "Secretary – Nicholas Perry",
                "Treasurer – James Chapman",
                "Risk Manager – Kyle Mahoney",
                "Fraternity Educator – Justin Steele",
                "Recruitment Chairman – Peter Burns",
                "Recruitment Chairman – Brian Heffernan",
                "Ritualist – Corey Rosenblatt",
                "Educational Chairman – Vangeli Tsakas",
                "Social Chairman – Cormac McPherson",
                "Alumni Secretary – Theo Jolley",
                "Alumni Advisor – Nelson Thomas",
                "Standards Chairman – Shane Foley",
                "Executive At Large – Emad Rahman",
                "Executive At Large – Tyler Garman",
                "Executive At Large – Matt Preziotti"
            ],
            newMembers: [
                "Riley Saunders",
                "Chandler Crescentini",
                "Timmy Davis",
                "Emmet Devlin",
                "Nicholas DiSarno",
                "Jake Eubanks",
                "Davis Gardner",
                "Ross Hasek",
                "Noah Helgenberg",
                "Dylan Kremp",
                "Joey Lamberto",
                "Ryan Mahoney",
                "Eric Marcus",
                "Michael Mauricio",
                "Eric Meyer",
                "Ross Moreau",
                "Sawyer Pardis",
                "Jordon Prince",
                "Peyton Saunders",
                "Kevin Welch",
                "Peter Wilson",
                "Kevin Winder"
            ],
            img: "app/home/images/paolo.jpg"
        };

        vm.events = [
            spring15,
            aaron,
            welcome
        ];

        vm.images = [
            "app/home/images/house.jpg",
            "app/home/images/home2.jpg",
            "app/home/images/home3.jpg",
            "app/home/images/home4.jpg",
            "app/home/images/home5.jpg",
            "app/home/images/volleyball.jpg",
            "app/philanthropy/images/watermelon.jpg"
        ];

    }

    module.controller('HomeCtrl', HomeCtrl);
})(angular.module('app.home'));
