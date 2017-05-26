//app/controller/productController.js
var Product = require('../model/product.js');
var Cate = require('../model/category.js');
var slug = require('slug');
//{ message: req.flash('loginMessage') }

var moment = require('moment');
var momentNow = moment();
var getTimeNow = momentNow.format('YYYY-MM-DD HH:mm:ss');

var multer  =   require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/product');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() +"-" + file.originalname);
  }
});


var upload = multer({ storage : storage }).array('imgdetail',5);

var ProductController = {
	add: function(req, res) {
        Cate.getAll(function(err,list){
            if(err){
                res.end();
                return console.log(err);
            }
    		res.render('admin/product/add',{
    			layout: 'main-admin',
    			title: 'Thêm sản phẩm mới',
                cate:list
    		}); 
        });
	},
	postadd: function(req, res) {
        upload(req,res,function(err) {
            if(err) {
                return console.log(err);
            }
            var temp = req.body.checkbox ? 1 : 0;
            var image = '';
            console.log(req.files.length)
            if(req.files.length > 0){
                image = req.files[0].filename;
            }
            else{
                
            }
            var ProductInfo = {
                cate: req.body.cate,
                name: req.body.name,
                description: req.body.description,
                alias: slug(req.body.name,"-"),
                user: 1,
                hide: temp,
                price: req.body.price,
                created_at: getTimeNow,
                updated_at: getTimeNow,
                image:image,
            };
            console.log(ProductInfo);
            Product.newPro(ProductInfo,function(err,result){
                //console.log(result);
                if(err){
                    res.end();
                    return console.log(err);
                }
                for(var i = 1;i<req.files.length;i++){
                    var pimage = {
                        image: req.files[i].filename,
                        product_id: result,
                        created_at: getTimeNow,
                        updated_at: getTimeNow,
                    }
                    Product.newImgPro(pimage,function(err,result){
                        if(err){
                            res.end();
                            return console.log(err);
                        }
                    });
                }
                
                req.flash('messageProduct', 'Đã thêm sản phẩm thành công!');
                res.redirect('/admin/product/list');
            })

        });

	},
    edit: function(req, res) {
        Product.getById(req.params.id,function(err,result){
            if(err){
                res.end();
                return console.log(err);
            }
            Cate.getAll(function(err,list){
                if(err){
                    res.end();
                    return console.log(err);
                }
                Product.getpImageById(req.params.id,function(err,pimage){
                    //console.log(pimage);
                    if(err){
                        res.end();
                        return console.log(err);
                    }
                    var cate = '';
                    for (var i = 0; i < list.length; i++) {
                        if(list[i].id == result.cate_id){
                            cate += '<option selected value="'+ list[i].id +'">'+ list[i].name +'</option>';
                        }
                        else
                            cate += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
                    }
                    var select='';
                    for(var index = pimage.length; index<4;index++){
                        select+='<div class="form-group"><label class="col-sm-3 control-label">Ảnh detail</label><div class="col-sm-5"><div class="fileinput fileinput-new" data-provides="fileinput"><span class="btn btn-info btn-file"><span class="fileinput-new">Select file</span><span class="fileinput-exists">Change</span><input type="file" accept="image/*" name="imgdetail"></span><span class="fileinput-filename"></span><a href="#" class="close fileinput-exists" data-dismiss="fileinput" style="float: none">&times;</a></div></div></div>';
                    }
                    //console.log(cate);
                    res.render('admin/product/edit',{
                        layout: 'main-admin',
                        title: 'Sửa sản phẩm',
                        product: result,
                        cate: cate,
                        pimage:pimage,
                        select: select
                    }); 
                });
            });
        });
    },
    postedit: function(req, res) {
        upload(req,res,function(err) {
            if(err) {
                return console.log(err);
            }
            var temp = req.body.checkbox ? 1 : 0;
            var index = 0;
            var ProductInfo = {
                id: req.body.id,
                cate: req.body.cate,
                name: req.body.name,
                description: req.body.description,
                alias: slug(req.body.name,"-"),
                user: 1,
                hide: temp,
                price: req.body.price,
                updated_at: getTimeNow,
            };
            if(!req.body.thumbnail && req.files.length > 0){
                ProductInfo.image = req.files[0].filename;
                index = 1;
            }
            if(index==0){
                Product.updateByIdNoImage(ProductInfo,function(err,result){
                    if(err){
                        res.end();
                        return console.log(err);
                    }
                });
            }
            else{
                Product.updateById(ProductInfo,function(err,result){
                    if(err){
                        res.end();
                        return console.log(err);
                    }
                });

            }
            for(index;index<req.files.length;index++){
                var pimage = {
                    image: req.files[index].filename,
                    product_id: ProductInfo.id,
                    created_at: getTimeNow,
                    updated_at: getTimeNow,
                }
                Product.newImgPro(pimage,function(err,result){
                    if(err){
                        res.end();
                        return console.log(err);
                    }
                });
            }
            req.flash('messageProduct', 'Đã Sửa sản phẩm thành công!');
            res.redirect('/admin/product/list');
        });
        
    },
    list:  function(req, res) {
        Product.getAll(function(err,result){
            //console.log(result);
            if(err){
                res.end();
                console.log(err);
            }

            res.render('admin/product/list',{
                list: result,
                layout: 'main-admin',
                title: 'Danh sách danh mục',
                message: req.flash('messageProduct')[0]
            });

            
        });
    },
    visible:  function(req, res) {
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            Product.visible(req.body,function(err,result){
                if(err){
                    res.end();
                    console.log(err);
                }
                console.log('Update Ajax Ẩn/Hiện thành công!')
                res.end('Update Ajax Ẩn/Hiện thành công!');
            });
        }
    },
    highlight:  function(req, res) {
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            Product.highlight(req.body,getTimeNow,function(err,result){
                if(err){
                    res.end();
                    console.log(err);
                }
                console.log('Update Ajax highlight thành công!')
                res.end('Update Ajax highlight thành công!');
            });
        }
    },
    delete:  function(req, res) {
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            Product.delete(req.body.id,function(err,result){
                if(err){
                    res.end();
                    console.log(err);
                }
                console.log('Delete Products thành công!')
                res.end('Delete Products thành công!');
            });
        }
    },
    delimg:  function(req, res) {
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            console.log(req.body.id);
            Product.delimg(req.body.id,function(err,result){
                if(err){
                    res.end();
                    console.log(err);
                }
                console.log('Delete Product Thumbnail thành công!')
                res.end('Delete Product Thumbnail thành công!');
            });
        }
    },
    delpImg:  function(req, res) {
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            console.log(req.body.id);
            Product.delpImg(req.body.id,function(err,result){
                if(err){
                    res.end();
                    console.log(err);
                }
                console.log('Delete Product Image thành công!')
                res.end('Delete Product Image thành công!');
            });
        }
    },
}

module.exports = ProductController;

