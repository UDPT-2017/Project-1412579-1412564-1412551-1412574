//app/controller/Login.js
var passport = require('passport');
const pool = require('../model/pg');

var LoginController = {
	formLogin : function(req, res) {
		//console.log(req.flash('loginMessage'));
		// render the page and pass in any flash data if it exists
		res.render('admin/login', { 
			layout: false,
			message: req.flash('loginMessage')[0] 
		});
	},

	formLoginAdmin : function(req, res) {
		//console.log(req.flash('loginMessage'));
		// render the page and pass in any flash data if it exists
		res.render('admin/login', { 
			layout: false,
			message: req.flash('loginMessage')[0] 
		});
	},

	login : function(req, res, next) {
		passport.authenticate('local-login', function(err, user, info) {
			if (err) { return next(err); }
			// Redirect if it fails
			if (!user) { return res.redirect('/account'); }
			req.logIn(user, function(err) {
				if (err) { return next(err); }
				// Redirect if it succeeds
					return res.redirect('/');
				});
			})(req, res, next),
			function(req, res) {
	            //console.log("hello");
	            //remember me
	            if (req.body.remember) {
	              req.session.cookie.maxAge = 1000 * 60 * 3;
	            } else {
	              req.session.cookie.expires = false;
	            }
        }
	},
	adminlogin : function(req, res, next) {
		passport.authenticate('local-login-admin', function(err, user, info) {
			if (err) { return next(err); }
			// Redirect if it fails
			if (!user) { return res.redirect('/admin'); }
			req.logIn(user, function(err) {
				if (err) { return next(err); }
				// Redirect if it succeeds
					return res.redirect('/admin/dashboard');
				});
			})(req, res, next),
			function(req, res) {
	            //console.log("hello");
	            //remember me
	            if (req.body.remember) {
	              req.session.cookie.maxAge = 1000 * 60 * 3;
	            } else {
	              req.session.cookie.expires = false;
	            }
        }
	},

	formAccount: function(req, res) {
		//console.log(req.flash('signupMessage'));
		//var temp = req.flash('signupMessage')[0];
		//console.log(temp);
		//console.log(req.flash('signupMessage')[0]);
		// render the page and pass in any flash data if it exists
		res.render('user/account',{ messagesig: req.flash('signupMessage')[0], messagelog: req.flash('loginMessage')[0] });
	},
	
	logout: function(req, res) {
		req.logout();
		res.redirect('/');
	},
	logoutAdmin: function(req, res) {
		req.logout();
		res.redirect('/admin');
	},
	signup: function(req, res){
		passport.authenticate('local-signup', {
			successRedirect : '/', // redirect to the secure profile section
			failureRedirect : '/signup',
			failureFlash : true // allow flash messages
		});
	},
	formForgot: function(req, res) {
		res.render('user/forgotpass',{ message: req.flash('forgotMessage')[0] });
	}


}

module.exports = LoginController;

