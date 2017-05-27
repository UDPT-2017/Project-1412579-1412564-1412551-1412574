$(document).ready(function() {

  // add to cart
  function handleItem(url, data, callback) {
    $.ajax({
      url: url,
      type: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data: JSON.stringify(data)
    })
    .done(function(xhr) {
      if(xhr.ok) {
        callback(xhr);
      }
    })
    .fail(function(error) {
      console.log(error);
    });
  }

  $('.item_add_cart').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    var item = $(this);
    data = {
      productId: item.attr('data-id'),
      productName: item.attr('data-name'),
      quantity: 1,
      price: item.attr('data-price')
    }
    handleItem('/cart/add_item', data, function(xhr) {
      $("#total_items_cart").html(xhr.cart.count);
    });
  });

  $('.item_add_cart_checkout').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    var item = $(this);
    data = {
      productId: item.attr('data-id'),
      productName: item.attr('data-name'),
      quantity: 1,
      price: item.attr('data-price')
    }
    handleItem('/cart/add_item', data, function(xhr) {
      $(`#quantity-${xhr.item.product_id}`).html(xhr.item.quantity);
    });
  });

  $("#empty_cart").click(function(e) {
    e.preventDefault();
    $.ajax({
      url: '/cart/empty_cart',
      type: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .done(function(xhr) {
      if(xhr.ok) {
        $("#total_items_cart").html('0');
        $('.cart-header').remove();
      }
    })
    .fail(function(error) {
      console.log(error);
    });
  });

  $(".remove_item").click(function(e) {
    e.preventDefault();
    var div = $(this);
    data = {
      productId: div.attr('data-id')
    }
    $.ajax({
      url: '/cart/remove_item',
      type: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data: JSON.stringify(data)
    })
    .done(function(xhr) {
      if(xhr.ok) {
        console.log(div.parent());
        div.parent().remove();
        var totalItem = $("#total_items_cart");
        var total = totalItem.html();
        total = parseInt(total) - 1;
        totalItem.html(total);
      }
    })
    .fail(function(error) {
      console.log(error);
    });
  });
});
