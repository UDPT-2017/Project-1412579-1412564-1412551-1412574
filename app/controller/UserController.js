var User = require('../model/user.js');
var bcrypt = require('bcrypt-nodejs');



var UserController =  {
	list : function(req, res) {
		//console.log(req.flash('loginMessage'));
		// render the page and pass in any flash data if it exists
		User.getAll(function(err,result){
            //console.log(result);
		    if(err){
		        res.end();
		        console.log(err);
		    }
		    res.render('admin/user/list',{
		        list: result,
		        layout: 'main-admin',
		        title: 'Danh sách user',
		        message: req.flash('messageUser')[0]
		    });
		});

	},
	
	delete:  function(req, res) {
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            User.delete(req.body.id,function(err,result){
                if(err){
                    res.end();
                    console.log(err);
                }
                console.log('Delete User thành công!')
                res.end('Delete User thành công!');
            });
        }
    },

    edit: function(req, res) {
        User.getById(req.params.id,function(err,result){
            res.render('admin/user/edit',{
                layout: 'main-admin',
                title: 'Sửa user',
                user: result,
            }); 
        });
    },

    postedit: function(req, res) {
    	console.log(req.body);
        var userInfo = {
            id: req.body.id,
            email: req.body.email,
            fullname: req.body.fullname,
            phone: req.body.phone,
            password: req.body.newpassword,
            password2: req.body.newpassword2,
            role: req.body.role,
        };
        if (userInfo.password == '')
        {
        	userInfo.password = req.body.password;
        	console.log("You didn't change password");
        	
        }
        else
        {
        	userInfo.password = bcrypt.hashSync(req.body.newpassword, null, null);

        }
        if (userInfo.password2 == '')
        	userInfo.password2 = req.body.password2;
        else
        	userInfo.password2 = bcrypt.hashSync(req.body.newpassword2, null, null);
        	
        console.log(userInfo);
        User.updateById(userInfo,function(err,result){
            if(err){
                res.end();
                console.log(err);
            }
            req.flash('messageUser', 'Đã Sửa User thành công!');
            res.redirect('/admin/user/list');
        });
    },

    add: function(req, res) {
        res.render('admin/user/add',{
            layout: 'main-admin',
            title: 'Tạo user mới',
        });
    },
    postadd: function(req, res) {
		var userInfo = {
            id: req.body.id,
            email: req.body.email,
            fullname: req.body.fullname,
            phone: req.body.phone,
            password: req.body.password,
            password2: req.body.password2,
            role: req.body.role,
        };

        User.newUser(userInfo,function(err,result){
        	if(err){
        		res.end();
        		console.log(err);
        	}
        	req.flash('messageUser', 'Đã thêm user thành công!');
      		res.redirect('/admin/user/list');
        });

	},
}

module.exports = UserController;

