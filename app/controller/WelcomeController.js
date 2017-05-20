//app/controller/WelcomeController.js

var WelcomeController = {
	index: function(req, res) {
		res.render('user/index'); // load the index.ejs file
	}
	
}

module.exports = WelcomeController;

