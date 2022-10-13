let cartLS=JSON.parse(localStorage.getItem("cart-page")) || [];


function generateCart(cartLS){
    cartLS.forEach(function(element){
        
        let card=document.createElement("div");
        card.setAttribute("class", "card");

        let image=document.createElement("img");
        image.setAttribute("src", element.image);

        let name=document.createElement("h3");
        name.innerText=element.name;

        let price=document.createElement("p");
        price.innerText="price : $ "+element.price;

        let del=document.createElement("button");
        del.innerText="DELETE";
        del.addEventListener("click", function(){
            removeItem(element.productID);
        });


        card.append(image, name, price, del);
        document.querySelector("#products").append(card);
    })
}
generateCart(cartLS);


function generateBill(cartLS){
    let totalPrice=0
    cartLS.forEach(function(element){
        totalPrice+=Number(element.price);
    })
    // console.log(totalPrice);
    document.querySelector("#bill>div>h3:first-child").innerText="Sub-Total - $ "+totalPrice;
    document.querySelector("#bill>div>h3:last-child").innerText="Your Cart Total - $ "+totalPrice;
}
generateBill(cartLS);

function removeItem(id){
    let deleted = cartLS.filter(function(element){
        return element.productID != id;
    })
    cartLS=deleted;
    localStorage.setItem("cart-page", JSON.stringify(cartLS));
    document.querySelector("#products").innerHTML="";
    generateCart(cartLS);
    generateBill(cartLS);
}





document.querySelector("#bill button").addEventListener("click", function(){
    // alert("Your order has been placed Successfully !! Thankyou for shopping at Anthropolgie!!")
    window.location.href="feedback.html";
})


