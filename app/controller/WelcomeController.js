//app/controller/WelcomeController.js
var Cate = require('../model/category.js')
var WelcomeController = {
	index: function(req, res) {
		Cate.getAll(function(err,result){
			if(err){
				res.end();
				return console.log(err);
			}
			console.log(result);
			res.render('user/index',{
				cate: result,
			}); 
		})
		// load the index.ejs file
	}
	
}

module.exports = WelcomeController;

