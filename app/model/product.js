const pool = require('../model/pg');
var Cate = {
	newPro: function(cateInfo, callback){
		var query = "insert into products(name,alias,price,description,user_id,cate_id,created_at,updated_at,hide,image) values('" 
		+ cateInfo.name + "','" 
		+ cateInfo.alias + "','" 
		+ cateInfo.price + "','" 
		+ cateInfo.description + "'," 
		+ cateInfo.user + "," 
		+ cateInfo.cate + ",'" 
		+ cateInfo.created_at + "','" 
		+ cateInfo.updated_at + "',"
		+ cateInfo.hide + ",'" 
		+ cateInfo.image + "') RETURNING id";
		console.log(query);
		pool.query(query, function(err, res){
			if (err){
				callback(err, null);
			}
			else
				callback(null, res.rows[0].id);
		});
	},
	newImgPro: function(productImage, callback){
		var query = "insert into product_images(image,product_id,created_at,updated_at) values('" 
		+ productImage.image + "'," 
		+ productImage.product_id + ",'" 
		+ productImage.created_at + "','" 
		+ productImage.updated_at + "')";
		console.log(query);
		pool.query(query, function(err, res){
			if (err){
				callback(err, null);
			}
			else
				callback(null, null);
		});
	},
	getAll: function(callback){
		pool.query("select products.id,products.name,products.price,fullname,cates.name as catename,products.created_at,products.updated_at,products.hide,products.image,products.highlight from products,cates,users where products.user_id = users.id and cate_id = cates.id", function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	getByCateId: function(cate_id,callback){
		pool.query("select * from products where cate_id = " +cate_id + " limit 3", function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	getByCateIdOffset: function(cate_id,callback){
		pool.query("select * from products where cate_id = " +cate_id + " limit 3 offset 3", function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	getByCateIdLoadMore: function(cate_id,page,callback){
		pool.query("select * from products where cate_id = " +cate_id + " limit 3 offset " + page*3, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	get4: function(callback){
		pool.query("select * from products where hide = 1 LIMIT 4", function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	get4Offset: function(callback){
		pool.query("select * from products where hide = 1 LIMIT 4 OFFSET 4", function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	getHighlight: function(callback){
		pool.query("select * from products where highlight=1 and hide = 1 order by highlight asc, updated_at desc  LIMIT 2", function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	getById: function(id,callback){
		pool.query("select * from products where id=" + id, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows[0]);
		});
	},
	getRandomByCateId: function(id,callback){
		pool.query("select * from products where cate_id=" + id + " order by random() limit 3", function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	getpImageById: function(id,callback){
		pool.query("select * from product_images where product_id=" + id, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	updateById: function(ProductInfo,callback){
		var query = "update products set name = '" 
            + ProductInfo.name + "', alias = '" 
            + ProductInfo.alias + "', price = " 
            + ProductInfo.price + ", description = '" 
            + ProductInfo.description + "', cate_id = " 
            + ProductInfo.cate + ", image = '" 
            + ProductInfo.image + "', updated_at = '" 
            + ProductInfo.updated_at + "', hide = " 
            + ProductInfo.hide + " where id = " + ProductInfo.id;
        console.log(query);
		pool.query(query, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	updateByIdNoImage: function(ProductInfo,callback){
		var query = "update products set name = '" 
            + ProductInfo.name + "', alias = '" 
            + ProductInfo.alias + "', price = " 
            + ProductInfo.price + ", description = '" 
            + ProductInfo.description + "', cate_id = " 
            + ProductInfo.cate + ", updated_at = '" 
            + ProductInfo.updated_at + "', hide = " 
            + ProductInfo.hide + " where id = " + ProductInfo.id;
        console.log(query);
		pool.query(query, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	visible: function(ProductInfo,callback){
		var query = 'update products set hide = ' + ProductInfo.hide + ' where id = ' + ProductInfo.id;
		pool.query(query, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, null);
		});
	},
	highlight: function(ProductInfo,getTimeNow,callback){
		var query = 'update products set highlight = ' + ProductInfo.hide + ", updated_at = '"+ getTimeNow +"' where id = " + ProductInfo.id;
		console.log(query);
		pool.query(query, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, null);
		});
	},
	delete: function(id,callback){
		var query = 'delete from products where id=' + id;
		pool.query(query, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, null);
		});
	},
	delimg: function(id,callback){
		var query = 'update products set image = null where id = ' + id;
		pool.query(query, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, null);
		});
	},
	delpImg: function(id,callback){
		var query = 'delete from product_images where id = ' + id;
		pool.query(query, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, null);
		});
	},
}

module.exports = Cate;