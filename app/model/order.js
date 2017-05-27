const pool = require('../model/pg');

function log(sql) {
  console.log('============== QUERY STRING ================');
  console.log(sql);
  console.log('============== END QUERY STRING ============');
}

function orders(user) {
  var getCart = function() {
    var sql = 'select * from orders where user_id=$1::bigint and checkout=false order by id desc limit 1';
    log(sql);
    return new Promise(function(resolve, reject) {
      pool.query(sql, [user.id], function(errors, result) {
        if(errors) {
          reject(errors);
        } else {
          if(result.rowCount > 0) {
            console.log(result);
            var order = result.rows[0];
            order = applyInstance(order);
            resolve(order);
          } else {
            var insertSql = 'insert into orders values (DEFAULT, $1::BIGINT, DEFAULT, DEFAULT, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *';
            log(insertSql);
            pool.query(insertSql, [user.id], function(err, resultInsert) {
              if(err) {
                reject(err);
              } else {
                var order = resultInsert.rows[0];
                order = applyInstance(order);
                resolve(order);
              }
            });
          }
        }
      });
    });
  }

  function applyInstance(order) {
    var intance = {
      getItem: function(productId) {
        var sql = 'select * from order_details where product_id=$1::BIGINT and order_id=$2::INT';
        return new Promise(function(resolve, reject) {
          pool.query(sql, [productId, order.id], function(errors, result) {
            if(errors) {
              reject(errors);
            } else {
              if(result.rowCount > 0) {
                var orderItem = result.rows[0];
                resolve(orderItem);
              }
            }
          });
        });
      },
      getAllItems: function() {
        var sql = 'select * from order_details,products where order_id=$1::INT and products.id = product_id';
        return new Promise(function(resolve, reject) {
          pool.query(sql, [order.id], function(errors, result) {
            if(errors) {
              reject(errors);
            } else {
              resolve(result.rows);
            }
          });
        });
      },
      updateTotal: function(total) {
        var sql = 'update orders set total=$1::BIGINT where id=$2::INT';
        log(sql);
        total = parseInt(order.total) + total;
        return new Promise(function(resolve, reject) {
          pool.query(sql, [total, order.id], function(errors,result) {
            if(errors) {
              reject(errors);
            } else {
              resolve(result);
            }
          });
        })
      },
      addItem: function(productId, price, name, quantity) {
        var sql = 'select * from order_details where order_id=$1::INT and product_id=$2::BIGINT';
        log(sql);
        return new Promise(function(resolve, reject) {
          pool.query(sql, [order.id, productId], function(errors, result) {
            if(errors) {
              reject(errors);
            } else {
              if(result.rowCount > 0) {
                var sqlUpdate = 'update order_details set quantity=$1::INT where order_id=$2::INT and product_id=$3::BIGINT RETURNING *';
                log(sqlUpdate);
                var newQuantity = result.rows[0].quantity + quantity;
                pool.query(sqlUpdate, [newQuantity, order.id, productId], function(err, resultUpdate) {
                  if(err) {
                    reject(err);
                  } else {
                    order.updateTotal(price * quantity);
                    resolve(resultUpdate.rows[0]);
                  }
                });
              } else {
                var sqlInsert = 'insert into order_details values(DEFAULT, $1::BIGINT, $2::VARCHAR, $3::INT, $4::BIGINT, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $5::INT) RETURNING *';
                log(sqlInsert);

                pool.query(sqlInsert, [productId, name, quantity, price, order.id], function(errorInsert, resultInsert) {
                  if(errorInsert) {
                    reject(errorInsert);
                  } else {
                    order.updateTotal(price * quantity);
                    resolve(resultInsert.rows[0]);
                  }
                });
              }
            }
          });
        });
      },
      reduceQuantity: function(productId, quantity) {
        return new Promise(function(resolve, reject) {
          order.getItem(productId)
          .then(function(item) {
            console.log('item------------------------');
            console.log(item);
            if(item.quantity <= quantity) {
              order.removeItem(productId)
              .then(function(result) {
                resolve(result);
              })
              .catch(function(errors) {
                reject(errors);
              });
            } else {
              var sql = 'update order_details set quantity=$1::INT where order_id=$2::INT and product_id=$3::BIGINT RETURNING * ';
              log(sql);
              var newQuantity = item.quantity - quantity;
              pool.query(sql, [newQuantity, order.id, productId], function(err, resultUpdate) {
                if(err) {
                  reject(err);
                } else {
                  order.updateTotal(-(item.price * quantity));
                  resolve(resultUpdate.rows[0]);
                }
              });
            }
          })
          .catch(function(error) {
            reject(error);
          });
        });
      },
      removeItem: function(productId) {
        var sql = 'delete from order_details where order_id=$1::INT and product_id=$2::BIGINT RETURNING *';
        return new Promise(function(resolve, reject) {
          pool.query(sql, [order.id, productId], function(errors, result) {
            if(errors) {
              reject(errors);
            } else {
              var item = result.rows[0];
              var total = item.price * item.quantity;
              order.updateTotal(-total);
              resolve(result);
            }
          });
        });
      },
      emptyCart: function() {
        var sql = 'delete from order_details where order_id=$1::INT RETURNING *';
        return new Promise(function(resolve, reject) {
          pool.query(sql, [order.id], function(errors, result) {
            if(errors) {
              reject(errors);
            } else {
              order.updateTotal(-parseInt(order.total));
              resolve(result);
            }
          });
        });
      },
      countItems: function() {
        var sql = 'select count(*) from order_details where order_id=$1::INT';
        return new Promise(function(resolve, reject) {
          pool.query(sql, [order.id], function(errors, result) {
            if(errors) {
              reject(errors);
            } else {
              resolve(result.rows[0].count);
            }
          });
        });
      }
    }
    order.addItem = intance.addItem;
    order.updateTotal = intance.updateTotal;
    order.removeItem = intance.removeItem;
    order.emptyCart = intance.emptyCart;
    order.reduceQuantity = intance.reduceQuantity;
    order.getAllItems = intance.getAllItems;
    order.getItem = intance.getItem;
    order.countItems = intance.countItems;
    return order;
  }

  return {
    getCart: getCart
  }
}

module.exports = orders;
