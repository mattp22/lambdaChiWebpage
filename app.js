var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jsend = require('jsend');

var app = express();

app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:1337/').set('prerenderToken', 'g1oqo4O3NSIsNHsJ2BLw'));
app.use(jsend.middleware);

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use('/api', require('./lib/api'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/google378deecd5d84dba2.html', function(req, res) {
    res.render('google378deecd5d84dba2.html');
});

app.get('/sitemap.xml', function(req, res) {
    res.render('sitemap.xml');
});

// This will ensure that all routing is handed over to AngularJS 
app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
