const pool = require('../model/pg');
var Slider = {
	getAll: function(callback){
		pool.query("select * from slider", function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	getById: function(id,callback){
		pool.query("select * from slider where id = " + id, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows[0]);
		});
	},
	updateById: function(id,image,callback){
		pool.query("update slider set image = '"+ image +"' where id = " + id, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows[0]);
		});
	},
	delimg: function(id,callback){
    var query = 'update slider set image = null where id = ' + id;
		pool.query(query, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, null);
		});
  },
}

module.exports = Slider;