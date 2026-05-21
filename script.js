// Login Function
function loginUser(){

    let phone = document.getElementById("phone").value;

    if(phone == ""){

        alert("Please Enter Phone Number");
    }

    else{

        localStorage.setItem("loggedIn","true");

        alert("Login Successful");

        document.getElementById("loginBox").style.display = "none";
    }
}


// Go To Menu
function goToMenu(){

    window.location.href = "menu.html";
}

// Go To Cart
function goToCart(){

    window.location.href = "cart.html";
}

// Order Button
function orderNow(){

    alert("Order Placed Successfully ");
}

// Payment Button
function makePayment(){

    alert("Payment Successful ");
}

// Cart Array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add To Cart
function addToCart(item,price,image){

    cart.push({
        name:item,
        price:price,
        image:image
    });

    localStorage.setItem("cart",JSON.stringify(cart));

    alert(item + " Added To Cart ");
}

// Show Cart
function displayCart(){

    let container = document.getElementById("cartContainer");

    let total = 0;

    if(container){

        container.innerHTML = "";

        cart.forEach(function(item,index){

            total += item.price;

            let div = document.createElement("div");

            div.classList.add("cart-item");

            div.innerHTML = `

                <img src="${item.image}" width="100%" height="200px" style="object-fit:cover;border-radius:10px;">

                <h3>${item.name}</h3>

                <p>Price: ₹${item.price}</p>

                <select>
                    <option>Cash On Delivery</option>
                    <option>UPI</option>
                    <option>Credit Card</option>
                </select>

                <br>

                <button onclick="removeItem(${index})">
                Remove
                </button>
            `;

            container.appendChild(div);
        });

        document.getElementById("totalPrice").innerHTML =
        "Total: ₹" + total;
    }
}

// Remove Item
function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();
}

// Review Function
function submitReview(event){

    event.preventDefault();

    let name = document.getElementById("reviewName").value;

    let rating = document.getElementById("rating").value;

    let review = document.getElementById("reviewText").value;

    let container = document.getElementById("reviewContainer");

    let div = document.createElement("div");

    div.classList.add("card");

    div.innerHTML = `

        <div style="padding:20px;">

            <h3>${name}</h3>

            <p>${rating}</p>

            <p>${review}</p>

        </div>
    `;

    container.appendChild(div);

    alert("Review Submitted Successfully ");
}

// Load Cart Automatically
// Place Order
function placeOrder(){

    alert("Order Placed Successfully ");
}

// Load Cart Automatically
window.onload = function(){

    displayCart();

    let loginBox = document.getElementById("loginBox");

    if(loginBox){

        let loggedIn = localStorage.getItem("loggedIn");

        if(loggedIn == "true"){

            loginBox.style.display = "none";
        }
    }
}