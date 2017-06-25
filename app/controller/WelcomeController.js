//app/controller/WelcomeController.js
var Cate = require('../model/category.js');
var Product = require('../model/product.js');
var Slider = require('../model/slider.js');
var WelcomeController = {
	index: function(req, res) {
		Slider.getAll(function(err,slider){
			if(err){
				res.end();
				return console.log(err);
			}

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
							if(req.user)
							{
								var Order = require('../model/order.js')(req.user);
								var gOrder;
								Order.getCart()
								.then(function(order) {
									gOrder = order;
									return order.countItems();
								})
								.then(function(count) {
									console.log(req.user);
									res.render('user/index',{
										cate: result,
										getHighlight: getHighlight,
										get4: get4,
										get4Offset: get4Offset,
										currentUser: req.user,
										countCart: count,
										cart: gOrder,
										isUser: 1,
										slider: slider
									});
								})
								.catch(function(errors) {
									console.log(errors);
								});
							}
							else{
								res.render('user/index',{
									cate: result,
									getHighlight: getHighlight,
									get4: get4,
									get4Offset: get4Offset,
									slider: slider
								});
							}
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
				console.log(productOffset);
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
						if(req.user){
							//console.log(req.user);
							var Order = require('../model/order.js')(req.user);
							var gOrder;
							Order.getCart()
							.then(function(order) {
								gOrder = order;
								return order.countItems();
							})
							.then(function(count) {
								console.log(req.user);
								res.render('user/products',{
									product: product,
									cate:cate,
									productOffset: productOffset,
									namecat: namecat,
									countCart: count,
									cart: gOrder,
									currentUser: req.user
								});
							})
							.catch(function(errors) {
								console.log(errors);
							});
						}
						else{
							res.render('user/products',{
								product: product,
								cate:cate,
								productOffset: productOffset,
								namecat: namecat,
							});
						}
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
							if(req.user){
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
										countCart: count,
										cart: gOrder,
										currentUser: req.user
									});
								})
								.catch(function(errors) {
									console.log(errors);
								});
							}
							else{
								res.render('user/single',{
									product: product,
									cate:cate,
									random:random,
									image:image,
									namecat:namecat,
								});
							}
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


