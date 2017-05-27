//app/controller/Login.js
var User = require('../model/user.js');
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
	},

	formEditAccount: function(req, res) {
		res.render('user/editaccount',{ message: req.flash('editMessage')[0] });
	},
	postEditAccount: function(req, res) {
		var userInfo = {
            id: req.body.id,
            email: req.body.email,
            fullname: req.body.fullname,
            phone: req.body.phone,
            password: req.body.newpassword,
            password2: req.body.newpassword2,
            role: req.body.role,
        };
        if (userInfo.password == '')
        {
        	userInfo.password = req.body.password;
        	console.log("You didn't change password");
        	
        }
        else
        {
        	userInfo.password = bcrypt.hashSync(req.body.newpassword, null, null);

        }
        if (userInfo.password2 == '')
        	userInfo.password2 = req.body.password2;
        else
        	userInfo.password2 = bcrypt.hashSync(req.body.newpassword2, null, null);
        	
        console.log(userInfo);
        User.updateById(userInfo,function(err,result){
            if(err){
                res.end();
                console.log(err);
            }
            req.flash('messageUser', 'Đã Update thông tin tài khoản thành công!');
            res.redirect('/logout');
        });
	},
}

module.exports = LoginController;

