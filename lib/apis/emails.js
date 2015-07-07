var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

module.exports = function(router) {

    router.post('/emails', function(req, res) {

        var options = {
            auth: {
                api_key: process.env.SENDGRID
            }
        };

        var mailer = nodemailer.createTransport(sgTransport(options));

        var email = {
            to: 'mattp22@vt.edu',
            from: req.body.contactEmail,
            subject: req.body.subject,
            text: req.body.message,
        };

        mailer.sendMail(email, function(err, res) {
            if (err) {
                console.log(err);
            }
            console.log(res);
        });

        mailer.close();

        if (err) {
            res.send(500);
        }
        res.send(200);
    });
};
