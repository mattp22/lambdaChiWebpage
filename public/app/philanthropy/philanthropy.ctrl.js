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
            "app/philanthropy/images/tug1.jpg",
            "app/philanthropy/images/tug2.jpg"
        ];

        vm.info = [{
            header: "Feeding America",
            img: "app/philanthropy/images/falogo.jpg",
            text: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad praesentium nostrum quidem omnis alias, iure nam eveniet laudantium enim dignissimos ratione, voluptas natus repudiandae, recusandae. Dolorum incidunt, sapiente explicabo voluptate!",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem omnis qui doloribus vitae nam enim ipsum perferendis accusamus, odio sit similique deserunt, repudiandae inventore facere suscipit quia ullam sunt blanditiis."
            ]
        }, {
            header: "Poster Contest",
            img: "app/philanthropy/images/posters2.jpg",
            text: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis non corrupti atque corporis beatae inventore. Voluptatum laboriosam animi vel dolorum repellendus, iusto, iure repellat quo eveniet eos, delectus odit cum.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam natus temporibus debitis voluptate sequi, voluptates, soluta, itaque quia nulla eos quod ipsum minima accusantium et, molestias odit est nesciunt modi?"
            ]
        }, {
            header: "Field Games",
            img: "app/philanthropy/images/watermelon.jpg",
            text: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor asperiores laudantium dolore cupiditate, placeat facilis saepe aspernatur natus maiores corporis architecto ad velit. Obcaecati aperiam, placeat assumenda explicabo nulla, repellendus.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eius, delectus atque molestias pariatur sapiente excepturi. Alias laudantium numquam, molestias, eos optio, cupiditate fuga dolore dolores voluptate quia voluptas quod!"
            ]
        }];

        vm.theta = [
            {
                name: "Christopher Connors",
                info: [
                    "External Vice President",
                    "High Theta",
                    "Senior"
                ],
                img: "topher.jpg"
            },
            {
                name: "Logan Shain",
                info: [
                    "Low Theta",
                    "Junior"
                ],
                img: "logan.png"
            }
        ];
    }

    module.controller('PhilanthropyCtrl', PhilanthropyCtrl);
})(angular.module('app.philanthropy'));
