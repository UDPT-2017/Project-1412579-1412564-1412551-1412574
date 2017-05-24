// app/routes.js

var WelcomeController = require('../app/controller/WelcomeController');
var LoginController = require('../app/controller/LoginController');
var AdminController = require('../app/controller/AdminController');
var CategoryController = require('../app/controller/CategoryController');


module.exports = function(app, passport,pool) {

	//Home
	app.get('/', WelcomeController.index);


	//Category
	app.get('/admin', AdminController.dashboard);	
	app.get('/admin/category/add', CategoryController.add);
	app.post('/admin/category/add', CategoryController.postadd);

	app.get('/admin/category/edit/:id', CategoryController.edit);
	app.post('/admin/category/edit/:id', CategoryController.postedit);

	app.get('/admin/category/list', CategoryController.list);

	app.post('/admin/category/update-visible', CategoryController.visible);

	app.post('/admin/category/delete', CategoryController.delete);


	// show the login form
	app.get('/login', Logged, LoginController.formLogin);

	// process the login form
	app.post('/login', LoginController.login);


	app.get('/sign-up', LoginController.formSignup);

	// process the signup form
	app.post('/sign-up', passport.authenticate('local-signup', {
		successRedirect : '/mailbox', // redirect to the secure profile section
		failureRedirect : '/sign-up', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));


	app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email','user_friends'] }));

	// handle the callback after facebook has authenticated the user
	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect : '/mailbox',
			failureRedirect : '/login'
		}));

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', LoginController.logout);

	app.get('*',function(req,res){
		res.render('user/404',{
			layout: false,
		});
	})

};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}

function Logged(req, res, next) {

	// if user isnt authenticated in the session, carry on
	if (!req.isAuthenticated())
		return next();

	// if they are redirect them to the home page
	res.redirect('/');
}
