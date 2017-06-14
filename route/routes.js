// app/routes.js

var WelcomeController = require('../app/controller/WelcomeController');
var LoginController = require('../app/controller/LoginController.js');
var AdminController = require('../app/controller/AdminController');
var CategoryController = require('../app/controller/CategoryController');
var ProductController = require('../app/controller/ProductController');

var UserController = require('../app/controller/UserController');

var CartController = require('../app/controller/CartController');


var multer  =   require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/product');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() +"-" + file.originalname);
  }
});

var upload = multer({ storage : storage });

module.exports = function(app, passport,pool) {

	//Home
	app.get('/',  WelcomeController.index);
	app.get('/danh-muc/:id-:alias',  WelcomeController.cate);
	app.get('/san-pham/:id-:alias',  WelcomeController.product);
	app.get('/loadmore',  WelcomeController.loadmore);
	//Category

	/*app.get('/admin/dashboard', isAdmin,AdminController.dashboard);	

	app.get('/admin/dashboard', isAdmin,AdminController.dashboard);

	app.get('/admin/category/add', isAdmin, isAdminAccess, CategoryController.add);
	app.post('/admin/category/add', isAdmin, isAdminAccess, CategoryController.postadd);

	app.get('/admin/category/edit/:id', isAdmin, isAdminAccess, CategoryController.edit);
	app.post('/admin/category/edit/:id', isAdmin, isAdminAccess, CategoryController.postedit);

	app.get('/admin/category/list', isAdmin, isAdminAccess, CategoryController.list);

	app.post('/admin/category/update-visible', isAdmin, isAdminAccess, CategoryController.visible);

	app.post('/admin/category/delete', isAdmin, isAdminAccess, CategoryController.delete);

	//product
	app.get('/admin/product/add', isAdmin,ProductController.add);
	app.post('/admin/product/add', isAdmin,ProductController.postadd);

	app.get('/admin/product/edit/:id', isAdmin,ProductController.edit);
	app.post('/admin/product/edit/:id', isAdmin,ProductController.postedit);

	app.get('/admin/product/list', isAdmin,ProductController.list);

	app.post('/admin/product/update-visible',isAdmin, ProductController.visible);
	app.post('/admin/product/update-highlight',isAdmin, ProductController.highlight);

	app.post('/admin/product/delete', isAdmin,ProductController.delete);
	app.post('/admin/product/delete-img', isAdmin,ProductController.delimg);
	app.post('/admin/product/delete-pImg', isAdmin,ProductController.delpImg);
	*/





	app.get('/admin/dashboard', isAdmin,AdminController.dashboard);	
	app.get('/admin/category/add',  isAdmin, CategoryController.add);
	app.post('/admin/category/add',  isAdmin, CategoryController.postadd);

	app.get('/admin/dashboard', AdminController.dashboard);	

	app.get('/admin/dashboard', AdminController.dashboard);

	app.get('/admin/category/add',  isAdminAccess, CategoryController.add);
	app.post('/admin/category/add',  isAdminAccess, CategoryController.postadd);


	app.get('/admin/category/edit/:id',  isAdmin, CategoryController.edit);
	app.post('/admin/category/edit/:id',  isAdmin, CategoryController.postedit);

	app.get('/admin/category/list',  isAdmin, CategoryController.list);

	app.post('/admin/category/update-visible',  isAdmin, CategoryController.visible);

	app.post('/admin/category/delete',  isAdmin, CategoryController.delete);

	//product
	app.get('/admin/product/add', isAdmin, ProductController.add);
	app.post('/admin/product/add', isAdmin, ProductController.postadd);

	app.get('/admin/product/edit/:id', isAdmin, ProductController.edit);
	app.post('/admin/product/edit/:id', isAdmin, ProductController.postedit);

	app.get('/admin/product/list', isAdmin, ProductController.list);

	app.post('/admin/product/update-visible', isAdmin, ProductController.visible);
	app.post('/admin/product/update-highlight', isAdmin, ProductController.highlight);

	app.post('/admin/product/delete', isAdmin, ProductController.delete);
	app.post('/admin/product/delete-img', isAdmin, ProductController.delimg);
	app.post('/admin/product/delete-pImg', isAdmin, ProductController.delpImg);

	app.get('/admin/user/list',  isAdmin, UserController.list);
	app.get('/admin/user/edit/:id',  isAdmin, UserController.edit);
	app.post('/admin/user/delete',  isAdmin, UserController.delete);
	app.post('/admin/user/edit',  isAdmin, UserController.postedit);
	app.get('/admin/user/add',  isAdmin, UserController.add);
	app.post('/admin/user/add',  isAdmin, UserController.postadd);


	


	app.get('/admin', notAdmin, LoginController.formLoginAdmin);
	app.post('/admin', notAdmin, LoginController.adminlogin);


	app.use('/cart', isLoggedIn, CartController);


	// show the login form
	//app.get('/login', Logged, LoginController.formLogin);
	// process the login form
	app.post('/login', LoginController.login);


	//view login and signup
	app.get('/account', LoginController.formAccount);

	//view forgot password
	app.get('/forgot', LoginController.formForgot);

	// process the signup form
	app.post('/sign-up', passport.authenticate('local-signup', {
		successRedirect : '/', // redirect to the secure profile section
		failureRedirect : '/sign-up', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	app.post('/changepass', passport.authenticate('local-changepass', {
		successRedirect : '/', // redirect to the secure profile section
		failureRedirect : '/forgot', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email','user_friends'] }));

	// handle the callback after facebook has authenticated the user
	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect : '/',
			failureRedirect : '/login'
		}));

	app.get('/editaccount',isLoggedIn, LoginController.formEditAccount);
	app.post('/editaccount',isLoggedIn, LoginController.postEditAccount);
	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', LoginController.logout);

	app.get('/admin/logout', LoginController.logoutAdmin);

	app.get('*',function(req,res){
		res.render('user/404',{
			layout: false,
		});
	})

	app.use(function(req,res,next){
		res.locals = ({
			user: req.user
		});
		return next();
	});

};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/account');
}

function Logged(req, res, next) {

	// if user isnt authenticated in the session, carry on
	if (!req.isAuthenticated())
		return next();

	// if they are redirect them to the home page
	res.redirect('/');
}

function notAdmin(req, res, next) {

	// if user isnt authenticated in the session, carry on
	if (!req.isAuthenticated())
		return next();
	else if(req.isAuthenticated()  && req.user.role == 0)
		return next();
	res.redirect('/admin/dashboard');
}

function isAdmin(req, res, next) {

	// if user isnt authenticated in the session, carry on
	if ( req.isAuthenticated() && req.user.role > 0)
		return next();

	// if they are redirect them to the home page
	res.redirect('/admin');
}

function isAdminAccess(req, res, next) {

	// if user isnt authenticated in the session, carry on
	if (req.user.role == 1)
		return next();

	// if they are redirect them to the home page
	res.end("401 - Unauthorized: Access is denied due to invalid credentials");
}
