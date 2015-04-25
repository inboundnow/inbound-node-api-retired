'use strict';

// middleware
var StripeWebhook = require('stripe-webhook-middleware'),
isAuthenticated = require('./middleware/auth').isAuthenticated,
isUnauthenticated = require('./middleware/auth').isUnauthenticated,
setRender = require('middleware-responder').setRender,
setRedirect = require('middleware-responder').setRedirect,
stripeEvents = require('./middleware/stripe-events'),
secrets = require('./config/secrets');

var passport = require('passport');


// react
var React = require('react/addons');
var App = React.createFactory(require('./components/main.jsx'));


// controllers
var users = require('./controllers/users-controller'),
main = require('./controllers/main-controller'),
dashboard = require('./controllers/dashboard-controller'),
passwords = require('./controllers/passwords-controller'),
registrations = require('./controllers/registrations-controller'),
sessions = require('./controllers/sessions-controller'),
handle_404 = require('./controllers/404-controller');

var User = require('./models/user');

var stripeWebhook = new StripeWebhook({
  stripeApiKey: secrets.stripeOptions.apiKey,
  respond: true
});

module.exports = function (app, passport) {

  // homepage and dashboard
  app.get('/',
    setRedirect({auth: '/dashboard'}),
    isUnauthenticated,
    setRender('index'),
    main.getHome);

  // sessions
  app.get('/login',
    setRedirect({auth: '/dashboard'}),
    isUnauthenticated,
    setRender('login'),
    main.getHome);

  app.post('/login',
    setRedirect({auth: '/dashboard', success: '/dashboard', failure: '/'}),
    isUnauthenticated,
    sessions.postLogin);

  app.get('/logout',
    setRedirect({auth: '/', success: '/'}),
    isAuthenticated,
    sessions.logout);

  // registrations
  app.get('/signup',
    setRedirect({auth: '/dashboard'}),
    isUnauthenticated,
    setRender('signup'),
    registrations.getSignup);
  app.post('/signup',
    setRedirect({auth: '/dashboard', success: '/dashboard', failure: '/signup'}),
    isUnauthenticated,
    registrations.postSignup);

  // forgot password
  app.get('/forgot',
    setRedirect({auth: '/dashboard'}),
    isUnauthenticated,
    setRender('forgot'),
    passwords.getForgotPassword);
  app.post('/forgot',
    setRedirect({auth: '/dashboard', success: '/forgot', failure: '/forgot'}),
    isUnauthenticated,
    passwords.postForgotPassword);

  // reset tokens
  app.get('/reset/:token',
    setRedirect({auth: '/dashboard', failure: '/forgot'}),
    isUnauthenticated,
    setRender('reset'),
    passwords.getToken);

  app.post('/reset/:token',
    setRedirect({auth: '/dashboard', success: '/dashboard', failure: 'back'}),
    isUnauthenticated,
    passwords.postToken);

  app.get('/dashboard',
    setRender('dashboard/index'),
    setRedirect({auth: '/'}),
    isAuthenticated,
    dashboard.getDefault);
  app.get('/billing',
    setRender('dashboard/billing'),
    setRedirect({auth: '/'}),
    isAuthenticated,
    dashboard.getBilling);
  app.get('/profile',
    setRender('dashboard/profile'),
    setRedirect({auth: '/'}),
    isAuthenticated,
    dashboard.getProfile);


  // user api stuff
  app.post('/user',
    setRedirect({auth: '/', success: '/profile', failure: '/profile'}),
    isAuthenticated,
    users.postProfile);
  app.post('/user/billing',
    setRedirect({auth: '/', success: '/billing', failure: '/billing'}),
    isAuthenticated,
    users.postBilling);
  app.post('/user/plan',
    setRedirect({auth: '/', success: '/billing', failure: '/billing'}),
    isAuthenticated,
    users.postPlan);
  app.post('/user/password',
    setRedirect({auth: '/', success: '/profile', failure: '/profile'}),
    isAuthenticated,
    passwords.postNewPassword);
  app.post('/user/delete',
    setRedirect({auth: '/', success: '/'}),
    isAuthenticated,
    users.deleteAccount);

  // use this url to receive stripe webhook events
  app.post('/stripe/events',
    stripeWebhook.middleware,
    stripeEvents
  );

  app.get('/react', function(req, res, next) {
    /*
      console.log("\n\n\n\n");
      console.log("react-------------------------------------");
      console.log("req.query.title = " + req.query.title);
      console.log("req.query.url = " + req.query.url);
      console.log("req.query.description = " + req.query.description);
      console.log("react-------------------------------------");
    */
      var myAppHtml = React.renderToString(App({}));
      res.render('react', {reactOutput: myAppHtml});
  });

  //Route for processing Referral
  app.get('/ref/:refid', function(req, res, next){
    //console.log("req.params.refid = " + req.params.refid);
    res.clearCookie('affliateReferredById');
    res.cookie('affliateReferredById', req.params.refid, { expires: new Date(Date.now() + 900000)});
    res.redirect('/signup');
  });

  app.get('/reminders/create', function(req, res, next) {

    res.render('create-reminder', {});
  });

  // Route for Chrome Extension Pop-Up
   app.get('/chromelogin', function(req, res, next) {
    res.render('chromelogin');
  });

  app.post('/chromelogin', function(req, res, next) {
      var urlStr = "";
      urlStr = urlStr + "title=";
      urlStr = urlStr + req.cookies.chromeexttitle;
      urlStr = urlStr + "&";
      urlStr = urlStr + "url=";
      urlStr = urlStr + req.cookies.chromeexturl;
      urlStr = urlStr + "&";
      urlStr = urlStr + "description=";
      urlStr = urlStr + req.cookies.chromeextdescription;

      var route1Str = "/react?";
      var route2Str = "/chromelogin";

      route1Str = route1Str + urlStr;
      //route2Str = route2Str + urlStr;

      passport.authenticate('login', {
        successRedirect: route1Str,
        failureRedirect: route2Str,
        failureFlash : true
      })(req, res, next);
  });

  app.get('/chromeext', function(req, res, next) {
     /*
      console.log("\n\n\n\n");
      console.log("*********chromeext-------------------------------------");
      console.log("*********req.query.title = " + req.query.title);
      console.log("*********req.query.url = " + req.query.url);
      console.log("*********req.query.description = " + req.query.description);
      console.log("chromeext-------------------------------------");
      console.log("req.query = " + req.query);
      console.log("-------------------------------------");
    */

      res.clearCookie('chromeexttitle');
      res.clearCookie('chromeexturl');
      res.clearCookie('chromeextdescription');

      res.cookie('chromeexttitle', req.query.title, { expires: new Date(Date.now() + 900000)});
      res.cookie('chromeexturl', req.query.url, { expires: new Date(Date.now() + 900000)});
      res.cookie('chromeextdescription', req.query.description, { expires: new Date(Date.now() + 900000)});

      var urlStr = "";
      urlStr = urlStr + "title=";
      urlStr = urlStr + req.query.title;
      urlStr = urlStr + "&";
      urlStr = urlStr + "url=";
      urlStr = urlStr + req.query.url;
      urlStr = urlStr + "&";
      urlStr = urlStr + "description=";
      urlStr = urlStr + req.query.description;

      var route1Str = "/react?";
      var route2Str = "/chromelogin";

      route1Str = route1Str + urlStr;
      //route2Str = route2Str + urlStr;

      if( req.user ){
        res.redirect(route1Str);
      }else{
        res.redirect(route2Str);
      }
  });

  // Validation for API Key
  /*
  function isValidApiKey(req, res, next) {

      var key = req.query.api;
      var site = req.query.site.replace("http://", "").replace("https://", "");
      //console.log(site);
      if (key) {
          User.findOne({
              'api_pubKey': key
          }, function(err, user) {
              // if there are any errors, return the error
              console.log(user);

              if (err) {
                  res.json({'error': 'db error'});
              }

              if (!user) {

                  res.json({'error': 'invalid api key'});

              } else {
                  // check for domain match
                  if(user.profile.website === site && typeof(site) != "undefined") {
                    return next();
                  } else {
                    res.json({'error': 'site domain doesnt match'});
                  }

              }
          });
      } else {
        res.json({'error': 'no key provided'});
      }
  }
  */
  function getHostName(url) {
      var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
      if (match != null && match.length > 2 &&
          typeof match[2] === 'string' && match[2].length > 0) {
      return match[2];
      }
      else {
          return url;
      }
  }
 function isValidApiKey(req, res, next) {
     //console.log(req);
     var key = req.body.api;
     var site = req.body.site; // hostname from WP

     if (key) {
         User.findOne({
             'api_pubKey': key
         }, function(err, user) {
             // if there are any errors, return the error
             console.log(user);

             if (err) {
                 res.json({'error': 'db error'});
             }

             if (!user) {

                 res.json({'error': 'invalid api key'});

             } else {
                 // check for domain match
                 var plan = user.stripe.plan;
                 if (plan === "free") {
                    // free plan bail
                 }
                 //var fromProf = getHostName(user.profile.website);
                 if(getHostName(user.profile.website) === site && typeof(site) != "undefined") {
                   return next();
                 } else {
                   res.json({'error': 'Site domain doesnt match. Make sure you set your Website URL on http://api.inboundnow.com/profile'});
                 }

             }
         });
     } else {
       res.json({'error': 'no API key provided. Please set your API key in settings'});
     }
 }


/*
  app.get('/api/test', isValidApiKey, function(req, res) {
          // console.log(req.user.apiKey.key);
          // Morgan logging here
          // User found and key is valid, return this response
          var slug = req.query.download;
          res.json({
              'apikey': true,
              'url': 'http://www.hudsonatwell.co/inboundnow/gitservlet.php?giturl=https://bitbucket.org/inboundnow/'+slug+'/get/master.zip'
          });
  });
*/

app.post('/api/test', isValidApiKey, function(req, res) {
        // console.log(req.user.apiKey.key);
        // Morgan logging here
        // User found and key is valid, return this response
        var slug = req.body.download;
        res.json({
            'apikey': true,
            'url': 'http://www.hudsonatwell.co/inboundnow/gitservlet.php?giturl=https://bitbucket.org/inboundnow/'+slug+'/get/master.zip'
        });
});

  /* reminder routes

    app.get('/api/reminder/create', function(req, res, next) {

    });

    app.get('/reminders/count', function(req, res, next) {

    });
  */

  /* logged in 404 */
  app.get('/404-error', function(req, res) {
     res.render('dashboard/404', {});
  });
  /* All other 404s */
  app.get('*',
    setRedirect({auth: '/404-error'}),
    isUnauthenticated,
    setRender('404'),
    handle_404.get404
  );


};