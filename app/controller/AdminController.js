//app/controller/AdminController.js

var AdminController = {
	dashboard: function(req, res) {
		res.render('admin/dashboard',{
			layout: 'main-admin',
		}); 
	}
	
}

module.exports = AdminController;

