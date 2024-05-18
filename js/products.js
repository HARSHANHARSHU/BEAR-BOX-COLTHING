var ul = document.getElementById("ul_pr");
var li = document.querySelectorAll("li");

function add(id){
    // var del_new = document.createElement("button");
    var li_new = document.createElement("li");
    var li_inp = document.createTextNode(id);
    li_new.appendChild(li_inp);
    // li_new.appendChild(document.createTextNode( '\u00A0\u00A0' ) );
    ul.appendChild(li_new);
    // var del_inp = document.createTextNode("Del");
    // del_new.appendChild(del_inp);
    // li_new.appendChild(del_new);
    ul.appendChild(document.createElement("br"));
}

window.emptyList = function () {
    var ul = document.querySelector('#ul_pr');
    var listLength = ul.children.length;
  
    for (i = 0; i < listLength; i++) {
      ul.removeChild(ul.children[0]);
    }
  }

  function redirectToWhatsApp(id) {
    // Split the id to get the product name and price
    const productDetails = id.split(' || ');
    const productName = productDetails[0];
    const productPrice = productDetails[1];
  
    // Construct the WhatsApp URL with the product details
    const message = `Check out this product: ${productName} for ${productPrice}`;
    const phoneNumber = '+919865301796';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
    // Redirect to the WhatsApp URL
    window.open(url, '_blank');
  }
  