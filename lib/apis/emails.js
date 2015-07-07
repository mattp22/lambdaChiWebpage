var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

module.exports = function(router) {

    var options = {
        auth: {
            api_key: process.env.SENDGRID
        }
    };

    var mailer = nodemailer.createTransport(sgTransport(options));

    router.post('/emails', function(req, res) {

        var email = {
            to: 'mattp22@vt.edu',
            from: req.body.contactEmail,
            subject: req.body.subject,
            text: req.body.message,
        };

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
