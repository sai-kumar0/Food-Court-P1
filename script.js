let carts = document.querySelectorAll('.add-cart')

let products = [
    {
        name : 'Burger',
        price : 24,
        tag : './img/offers-1',
        inCart : 0
    },
    {
        name : 'Fried Rice',
        price : 17,
        tag : './img/offers-fried',
        inCart : 0
    },
    {
        name : 'Cold Coffee',
        price : 11,
        tag : './img/offers-cofee',
        inCart : 0
    },
    {
        name : 'Fried Chicken',
        price : 41,
        tag : './img/offers-chicken',
        inCart : 0
    },
    {
        name : 'Samosa',
        price : 7,
        tag : './img/offers-samosa',
        inCart : 0
    },
    {
        name : 'Cream Stone',
        price : 21,
        tag : './img/offers-ice',
        inCart : 0
    },
    {
        name : 'Cake Tres',
        price : 31,
        tag : './img/offers-cake',
        inCart : 0
    },
    {
        name : 'Sharwama',
        price : 16,
        tag : './img/offers-sharwama',
        inCart : 0
    },
    {
        name : 'Ratatouli',
        price : 114,
        tag : './img/specials-rat',
        inCart : 0
    },
    {
        name : 'Nuggets',
        price : 62,
        tag : './img/specials-chick',
        inCart : 0
    },
    {
        name : 'Margarite',
        price : 35,
        tag : './img/specials-pizza',
        inCart : 0
    },
    {
        name : 'French Fries',
        price : 15,
        tag : './img/specials-fries',
        inCart : 0
    },
    {
        name : 'Idli',
        price : 21,
        tag : './img/specials-idli',
        inCart : 0
    },
    {
        name : 'chicken Soup',
        price : 39,
        tag : './img/specials-nugg',
        inCart : 0
    },
    {
        name : 'Tacos',
        price : 61,
        tag : './img/specials-tacos',
        inCart : 0
    },
    {
        name : 'Sandwich',
        price : 19,
        tag : './img/specials-sand',
        inCart : 0
    },
]

for(let i=0 ; i < carts.length ; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i])
        totalCost(products[i])
    })
}

function cartNumbers(product) {
    let productNumber = sessionStorage.getItem('cartNumbers');
    productNumber = parseFloat(productNumber);

    if(productNumber) {
        sessionStorage.setItem('cartNumbers', productNumber + 1);
    } else {
        sessionStorage.setItem('cartNumbers', 1);
    }

    setItems(product)

}

function setItems(product) {
    let cartItems = sessionStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart +=1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    sessionStorage.setItem('productInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = sessionStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        sessionStorage.setItem('totalCost', cartCost + product.price);
    } else {
        sessionStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = sessionStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector('.products');

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <i class="fa-solid fa-circle-xmark icon" style="color: #000000;"></i>
                <img src="${item.tag}.png">
                <span class="productName">${item.name}</span>
            </div>
            <div class="price">$${item.price}</div>
            <div class="quantity">
            <i class="fa-solid fa-square-minus icon" style="color: #000000;"></i>
            <span>${item.inCart}</span>
            <i class="fa-solid fa-square-plus icon" style="color: #000000;"></i>
            </div>
            <div class="total">
            $${item.inCart * item.price},00
            </div>
            `;
        });
    }
}

displayCart()



// ---------------------------------------------Login Page Js-----------------------------------------


let signinbtn = document.getElementById("signin")
let signupbtn = document.getElementById("signup")
let btn = document.getElementById("main-btn")

signupbtn.onclick = function() {
    btn.innerHTML = "Sign up"
    signupbtn.classList.add("active")
    signinbtn.classList.remove("active")
}


signinbtn.onclick = function() {
    btn.innerHTML = "Sign in"
    signinbtn.classList.add("active")
    signupbtn.classList.remove("active")
}