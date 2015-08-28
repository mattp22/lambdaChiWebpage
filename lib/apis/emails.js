var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var fs = require('fs');

module.exports = function(router) {

    var options = {
        auth: {
            api_key: process.env.SENDGRID
        }
    };

    var mailer = nodemailer.createTransport(sgTransport(options));

    router.post('/emails', function(req, res) {

        var file = fs.readFileSync('data/contact/contact.json', 'utf8');
        var contacts = JSON.parse(file);
        var presidentEmail = contacts[0].email;

        var email = {
            to: presidentEmail,
            from: req.body.contactEmail,
            subject: req.body.subject,
            text: 'From: ' + req.body.contactName + '\n\n' + req.body.message,
        };

        console.log(email.to);

        mailer.sendMail(email, function(error, response) {
            if (error) {
                console.log(error);
                res.sendStatus(500);
            } else {
                console.log("Message sent: " + response.message);
                res.sendStatus(200);
            }
            mailer.close();
        });
    });
};
