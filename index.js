var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var randomPrice = Math.floor((Math.random() * 100) + 1)
  var product = {}
  
  product.itemName = item
  product.itemPrice = randomPrice
  cart.push(product)
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return (`Your shopping cart is empty.`)

  } else {
    var item_connect_1 = []
    var item_connect_2 = []
    

    for (var i = 0; i < cart.length; i++) { 
        item_connect_1.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    
        var first_slice_element = item_connect_1.slice(0, -1)
  
        item_connect_2.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)

        var last_element = item_connect_2[item_connect_2.length - 1]
        
      }

    if (first_slice_element.length === 0){
      return(`In your cart, you have ${item_connect_1}.`)

    } else {
    return('In your cart, you have ' + first_slice_element.join(', ').trim() + ',' + ' and ' + last_element + '.')
    }
  }
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++) {
      total += cart[i].itemPrice
  }
  return(total)   
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
