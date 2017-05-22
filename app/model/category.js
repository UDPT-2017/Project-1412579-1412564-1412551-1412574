const pool = require('../model/pg');
var Cate = {
	newCate: function(cateInfo, callback){
		var query = "insert into cates(name,alias,orderb,created_at,updated_at,hide) values('" 
		+ cateInfo.name + "','" 
		+ cateInfo.alias + "'," 
		+ cateInfo.order + ",'" 
		+ cateInfo.created_at + "','" 
		+ cateInfo.updated_at + "'," 
		+ cateInfo.hide + ")";
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
		pool.query("select * from cates", function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
}

module.exports = Cate;