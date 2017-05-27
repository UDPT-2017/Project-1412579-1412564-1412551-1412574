//app/controller/WelcomeController.js
var Cate = require('../model/category.js');
var Product = require('../model/product.js');

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
						var Order = require('../model/order.js')(req.user);
						var gOrder;
						Order.getCart()
						.then(function(order) {
							gOrder = order;
							return order.countItems();
						})
						.then(function(count) {
							res.render('user/index',{
								cate: result,
								getHighlight: getHighlight,
								get4: get4,
								get4Offset: get4Offset,
								currentUser: req.user,
								countCart: count,
								cart: gOrder
							});
						})
						.catch(function(errors) {
							console.log(errors);
						});
					});
				});
			});
		});
	},
	cate: function(req,res){
		console.log(req.params)
		Product.getByCateId(req.params.id,function(err,product){
			if(err){
				res.end();
				return console.log(err);
			}
			Product.getByCateIdOffset(req.params.id,function(err,productOffset){
				if(err){
					res.end();
					return console.log(err);
				}
				Cate.getAll(function(err,cate){
					if(err){
						res.end();
						return console.log(err);
					}
					Cate.getById(req.params.id,function(err,namecat){
						if(err){
							res.end();
							return console.log(err);
						}

						var Order = require('../model/order.js')(req.user);
						var gOrder;
						Order.getCart()
						.then(function(order) {
							gOrder = order;
							return order.countItems();
						})
						.then(function(count) {
							res.render('user/products',{
								product: product,
								cate:cate,
								productOffse: productOffset,
								namecat: namecat,
								currentUser: req.user,
								countCart: count,
								cart: gOrder
							});
						})
						.catch(function(errors) {
							console.log(errors);
						});
					});
				});
			});
		});
	},
	product: function(req,res){
		console.log(req.params)
		Product.getById(req.params.id,function(err,product){
			if(err){
				res.end();
				return console.log(err);
			}
			Product.getRandomByCateId(product.cate_id,function(err,random){
				console.log(random);
				if(err){
					res.end();
					return console.log(err);
				}
				Cate.getAll(function(err,cate){
					if(err){
						res.end();
						return console.log(err);
					}

					Product.getpImageById(req.params.id,function(err,image){
						if(err){
							res.end();
							return console.log(err);
						}
						Cate.getById(product.cate_id,function(err,namecat){
							if(err){
								res.end();
								return console.log(err);
							}
							var Order = require('../model/order.js')(req.user);
							var gOrder;
							Order.getCart()
							.then(function(order) {
								gOrder = order;
								return order.countItems();
							})
							.then(function(count) {
								res.render('user/single',{
									product: product,
									cate:cate,
									random:random,
									image:image,
									namecat:namecat,
									currentUser: req.user,
									countCart: count,
									cart: gOrder
								});
							})
							.catch(function(errors) {
								console.log(errors);
							});
						});
					});

				});
			});
		});
	},
	loadmore: function(req,res){
		if (req.xhr || req.headers.accept.indexOf('json') > -1) {
			Product.getByCateIdLoadMore(req.query.id,req.query.page,function(err,result){
				//console.log(result);
				if(err){
					res.end();
					return console.log(err);
				}
				console.log('ajax loadmore thành công!');
				res.end(JSON.stringify(result));
			});

		}
	}
}

module.exports = WelcomeController;

