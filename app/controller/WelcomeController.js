//app/controller/WelcomeController.js
var Cate = require('../model/category.js');
var Product = require('../model/Product.js');
var WelcomeController = {
	index: function(req, res) {
		Cate.getAll(function(err,result){
			if(err){
				res.end();
				return console.log(err);
			}
			Product.get4(function(err,get4){
				if(err){
					res.end();
					return console.log(err);
				}
				Product.get4Offset(function(err,get4Offset){
					if(err){
						res.end();
						return console.log(err);
					}
					Product.getHighlight(function(err,getHighlight){
						if(err){
							res.end();
							return console.log(err);
						}
						console.log(result);
						res.render('user/index',{
							cate: result,
							getHighlight: getHighlight,
							get4: get4,
							get4Offset: get4Offset,
						}); 
					});
				});
			});
		});
	}
	
}

module.exports = WelcomeController;

