//app/controller/CategoryController.js
var Cate = require('../model/category.js')
var slug = require('slug');
//{ message: req.flash('loginMessage') }

var moment = require('moment');
var momentNow = moment();
var getTimeNow = momentNow.format('YYYY-MM-DD HH:mm:ss');

var CategoryController = {
	add: function(req, res) {
		res.render('admin/category/add',{
			layout: 'main-admin',
			title: 'Thêm danh mục mới'
		}); 
	},
	postadd: function(req, res) {
		console.log(req.body.name);
		console.log(req.body.order);
		var temp = req.body.checkbox ? 1 : 0;
		console.log(temp);
		var cateInfo = {
            name: req.body.name,
            order: req.body.order,
            alias: slug(req.body.name,"-"),
            hide: temp,
            created_at: getTimeNow,
            updated_at: getTimeNow
        };

        Cate.newCate(cateInfo,function(err,result){
        	if(err){
        		res.end();
        		console.log(err);
        	}
        	req.flash('message', 'Đã thêm danh mục thành công!' );
      		res.redirect('/admin/category/add');
        });

	}
}

module.exports = CategoryController;

