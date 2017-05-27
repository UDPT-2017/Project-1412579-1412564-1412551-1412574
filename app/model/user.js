const pool = require('../model/pg');

var User = {
	getUser: function(email, password, callback){
		pool.query('SELECT * FROM USERS WHERE email = $1::text and pass = $2::text', [email, password], function(err, res){
			if (err != null)
				callback(err, null);
			else
				callback(null, res.rows);
		});
	},
	getAll: function(callback){
		pool.query("select * from users order by email", function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	delete: function(id,callback){
		var query = 'delete from users where id=' + id;
		console.log('id delete = ' + id);
		pool.query(query, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, null);
		});
	},
	getById: function(id,callback){
		pool.query("select * from users where id=" + id, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows[0]);
		});
	},
	updateById: function(userInfo,callback){
		var query = "update users set email = '" 
		+ userInfo.email + "', fullname = '" 
		+ userInfo.fullname + "', phone = " 
		+ userInfo.phone + ", password = '" 
		+ userInfo.password + "', role = " 
		+ userInfo.role + ", pass2 = '" 
		+ userInfo.password2 + "' where id = " + userInfo.id;
		pool.query(query, function(err, result){
			if (err){
				callback(err, null);
			}
			else
				callback(null, result.rows);
		});
	},
	newUser: function(userInfo, callback){
		var query = "insert into users(email,password,fullname,phone,role,pass2) values('" 
		+ userInfo.email + "','" 
		+ userInfo.password + "','"
		+ userInfo.fullname + "','" 
		+ userInfo.phone + "',"
		+ userInfo.role + ", '" 
		+ userInfo.password2 + "')";
		console.log(query);
		pool.query(query, function(err, res){
			if (err){
				callback(err, null);
			}
			else
				callback(null, null);
		});
	},

}

module.exports = User;