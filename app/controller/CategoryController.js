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
        	req.flash('messageCate', 'Đã thêm danh mục thành công!');
      		res.redirect('/admin/category/list');
        });

	},
    edit: function(req, res) {
        Cate.getById(req.params.id,function(err,result){
            Cate.listOrderb(result.orderb,function(list){
                res.render('admin/category/edit',{
                    layout: 'main-admin',
                    title: 'Sửa danh mục',
                    cate: result,
                    orderb: list
                }); 
            });
        });
    },
    postedit: function(req, res) {
        var temp = req.body.checkbox ? 1 : 0;
        var cateInfo = {
            id: req.body.id,
            name: req.body.name,
            order: req.body.order,
            alias: slug(req.body.name,"-"),
            hide: temp,
            updated_at: getTimeNow
        };
        console.log(cateInfo);
        Cate.updateById(cateInfo,function(err,result){
            if(err){
                res.end();
                console.log(err);
            }
            req.flash('messageCate', 'Đã Sửa danh mục thành công!');
            res.redirect('/admin/category/list');
        });
    },
    list:  function(req, res) {
        Cate.getAll(function(err,result){
            //console.log(result);
            if(err){
                res.end();
                console.log(err);
            }
            res.render('admin/category/list',{
                list: result,
                layout: 'main-admin',
                title: 'Danh sách danh mục',
                message: req.flash('messageCate')[0]
            });
        });
    },
    visible:  function(req, res) {
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            Cate.visible(req.body,function(err,result){
                if(err){
                    res.end();
                    console.log(err);
                }
                console.log('Update Ajax Ẩn/Hiện thành công!')
                res.end('Update Ajax Ẩn/Hiện thành công!');
            });
        }
    },
    delete:  function(req, res) {
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            Cate.delete(req.body.id,function(err,result){
                if(err){
                    res.end();
                    console.log(err);
                }
                console.log('Delete Cates thành công!')
                res.end('Delete Cates thành công!');
            });
        }
    }
}

module.exports = CategoryController;

