var express = require('express');
var router = express.Router();
var Cate = require('../model/category.js');
router.get('/checkout', function(req, res, next) {
  var Order = require('../model/order.js')(req.user);
  var gOrder;
  var gCount ;
  Cate.getAll(function(err,result){
    Order.getCart()
    .then(function(order) {
      gOrder = order;
      return order.countItems();
    })
    .then(function(count) {
      gCount = count;
      return gOrder.getAllItems();
    })
    .then(function(allItems) {
      res.render('user/checkout',{
        currentUser: req.user,
        countCart: gCount,
        cart: gOrder,
        items: allItems,
        cate:result
      });
    })
    .catch(function(errors) {
      console.log(errors);
    });
  });
});

router.post('/add_item', function(req, res, next) {
  var productId = req.body['productId'];
  var price = req.body['price'];
  var quantity = req.body['quantity'];
  var name = req.body['productName'];
  var Order = require('../model/order')(req.user);
  var gOrder;
  var gCount;
  var gItem;
  Order.getCart()
  .then(function(order) {
    gOrder = order;
    console.log('--------------CART #1-----------------');
    console.log(order);
    return gOrder.addItem(productId, price, name, quantity);
  })
  .then(function (item) {
    gItem = item;
    return gOrder.countItems();
  })
  .then(function (count) {
    gCount = count;
    return Order.getCart();
  })
  .then(function (cart) {
    cart.count = gCount;
    res.send({ok: true, cart: cart, item: gItem, error: null});
  })
  .catch(function (errors) {
    console.log(errors);
    res.send({ok: false, cart: null, error: errors});
  });
});

router.post('/remove_item', function(req, res, next) {
  var Order = require('../model/order')(req.user);
  var productId = req.body['productId'];
  var gOrder;
  Order.getCart()
  .then(function(order) {
    gOrder = order;
    return gOrder.removeItem(productId);
  })
  .then(function (result) {
    res.send({ok: true, result: result, error: null});
  })
  .catch(function (errors) {
    console.log(errors);
    res.send({ok: false, result: null, error: errors});
  });
});

router.post('/empty_cart', function(req, res, next) {
  var Order = require('../model/order')(req.user);
  Order.getCart()
  .then(function(order) {
    return order.emptyCart();
  })
  .then(function (result) {
    res.send({ok: true, result: result, error: null});
  })
  .catch(function (errors) {
    console.log(errors);
    res.send({ok: false, cart: null, error: errors});
  });
});

module.exports = router;
