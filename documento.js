$('.formulario').mouseover(function() {
    $('.formulario').css('background-color','orange')
})

$('.formulario').mouseout(function() {
    $('.formulario').css('background-color','greenyellow')
})

const zoomableImages = document.querySelectorAll('.zoomable');
zoomableImages.forEach(image => {
    image.addEventListener('mouseover', function() {
        image.style.transform = 'scale(2)'; 
    });

    image.addEventListener('mouseout', function() {
        image.style.transform = 'scale(1)'; 
    });
});
// Funcionalidad para el carrito de compras
let cart = [];

function updateCart() {
    $('#cart-count').text(`(${cart.length})`);
}

$('.add-to-cart').on('click', function() {
    let product = $(this).siblings('img').attr('alt');
    cart.push(product);
    updateCart();
});

$('.remove-from-cart').on('click', function() {
    let product = $(this).siblings('img').attr('alt');
    let index = cart.indexOf(product);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
});
$(document).ready(function() {
    var cart = [];
    var total = 0;
  
    $(".add-to-cart").click(function() {
      var productName = $(this).siblings(".product-name").text();
      var productPrice = parseFloat(productName.split('$')[1]);
  
      cart.push({ name: productName, price: productPrice });
      total += productPrice;
  
      updateCart();
    });
  
    $(".remove-from-cart").click(function() {
      var productName = $(this).siblings(".product-name").text();
      var productPrice = parseFloat(productName.split('$')[1]);
  
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === productName) {
          cart.splice(i, 1);
          total -= productPrice;
          break;
        }
      }
  
      updateCart();
    });
  
    $("#cart-button").click(function() {
      $("#shopping-cart").toggle();
    });
  
    function updateCart() {
      var cartItems = $("#cart-items");
      cartItems.empty();
  
      cart.forEach(function(item) {
        cartItems.append("<li>" + item.name + "</li>");
      });
  
      $("#cart-total").text("Total: $" + total.toFixed(2));
    }
  });
  