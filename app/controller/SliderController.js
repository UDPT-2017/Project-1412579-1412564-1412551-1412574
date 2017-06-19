

var Slider = require('../model/slider.js');

var multer  =   require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/images');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() +"-" + file.originalname);
  }
});

var upload = multer({ storage : storage }).single('slider');

var SliderController = {
    list: function(req, res) {
        Slider.getAll(function(err,slider){
            if(err){
                res.end();
                return console.log(err);
            }
            res.render('admin/slider/list',{
                layout: 'main-admin',
                title: 'Danh sách hình ảnh slider ',
                slider: slider,
                message: req.flash('message')[0]
            }); 
        });
    },
    edit: function(req, res) {
        Slider.getById(req.params.id,function(err,slider){
            if(err){
                res.end();
                return console.log(err);
            }
            res.render('admin/slider/edit',{
                layout: 'main-admin',
                title: 'Chỉnh sửa hình ảnh slider ',
                slider: slider
            }); 
        });
    },
    postedit: function(req, res) {
        upload(req, res, function (err) {
            if (err) {
              // An error occurred when uploading
              return console.log(err);
            }
            Slider.updateById(req.body.id,req.file.filename,function(err,slider){
                if (err) {
                  return console.log(err);
                }
                req.flash('message', 'Đã Sửa slider thành công!');
                res.redirect('/admin/slider/list');
            });
            
        });
    },
    delimg:  function(req, res) {
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            console.log(req.body.id);
            Slider.delimg(req.body.id,function(err,result){
                if(err){
                    res.end();
                    console.log(err);
                }
                console.log('Delete slider image thành công!')
                res.end('Delete slider image thành công!');
            });
        }
    },

}

module.exports = SliderController;

