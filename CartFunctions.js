let Productdata = [
        {
            name: 'Iphone 12 Pro',
            image: 'Iphone 12pro.png',
            price: 1329,
            inCart: 0,
            highlights: [
                '6,1" Screen',
                '256GB',
                '5G capability'
            ]
        },
        {
            name: 'Iphone 12',
            image: 'Iphone 12.png',
            price: 899,
            inCart: 0,
            highlights: [
                '5,4" Screen',
                '128GB',
                '5G capability'
            ]
        },
        {
            name: 'Iphone SE',
            image: 'Iphone SE.png',
            price: 529,
            inCart: 0,
            highlights: [
                '4,7" Screen',
                '64GB',
                '4G LTE capability'
            ]
        },
        {
            name: 'Oneplus 8T',
            image: 'Oneplus 8T reso.png',
            price: 599,
            inCart: 0,
            highlights: [
                '6,55" Screen',
                '128GB',
                '5G capability'
            ]
        },
        {
            name: 'Oneplus 6',
            image: 'Oneplus 6.png',
            price: 399,
            inCart: 0,
            highlights: [
                '6,28" Screen',
                '128GB',
                '4G LTE capability'
            ]
        },
        {
            name: 'Xiaomi Mi Note 10',
            image: 'Xiaomi mi note 10.png',
            tag: 'Xiaomi mi note 10',
            price: 579,
            inCart: 0,
            highlights: [
                '6,47" Screen',
                '128GB',
                '4G LTE capability'
            ]
        },
        {
            name: 'Samsung Galaxy S10 Lite',
            image: 'Samsung Galaxy S10 Lite.png',
            price: 619,
            inCart: 0,
            highlights: [
                '6,7" Screen',
                '128GB',
                '4G LTE capability'
            ]
        },
        {
            name: 'Samsung Galaxy A20e',
            image: 'Samsung Galaxy A20e.png',
            price: 139,
            inCart: 0,
            highlights: [
                '5,8" Screen',
                '32GB',
                '4G LTE capability'
            ]
        },
        {
            name: 'Honor 8S',
            image: 'Honor 8S.png',
            price: 119,
            inCart: 0,
            highlights: [
                '5,71" Screen',
                '32GB',
                '4G LTE capability'
            ]
        },
        {
            name: 'Huawei p30 Lite',
            image: 'Huawei p30 lite.png',
            price: 219,
            inCart: 0,
            highlights: [
                '6,15" Screen',
                '128GB',
                '4G LTE capability'
            ]
        },
    ];    

let carts = document.querySelectorAll('.addtocarttext');

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(Productdata[i]);
        totalcost(Productdata[i])
    })
}

function totalcost(Productdata) {
    let CostinCart = localStorage.getItem('totalcost');
   
    if(CostinCart != null) {
        CostinCart = parseInt(CostinCart);
        localStorage.setItem("totalcost", Productdata.price + CostinCart);
    } 
    else {
        localStorage.setItem("totalcost", Productdata.price);
    }
}

function KeepCartAmount() {
    let productNumbers = localStorage.getItem('cartNumbers');
    let counter = document.getElementById('cartAmount');
    if (productNumbers) {
        counter.innerHTML = productNumbers;
    }
}

function cartNumbers(Productdata) {
    let productNumbers = localStorage.getItem('cartNumbers');
    let counter = document.getElementById('cartAmount');
    productNumbers = parseInt(productNumbers);
    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        counter.innerHTML = productNumbers + 1;
    } 
    else {
        localStorage.setItem('cartNumbers', 1);
        counter.innerHTML = "1";
    }
    
    setItems(Productdata);
}

function setItems(Productdata) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[Productdata.name] == undefined) {
            cartItems = {
                ...cartItems,
                [Productdata.name]: Productdata
            }
        }
        cartItems[Productdata.name].inCart += 1;
    } 
    else {
        Productdata.inCart = 1;
        cartItems = {
            [Productdata.name]: Productdata
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartArea = document.querySelector(".cartitemarea");
    let CostinCart = localStorage.getItem('totalcost');
    if(cartItems && cartArea) {
            cartArea.innerHTML = ''
            Object.values(cartItems).map(item => {
                cartArea.innerHTML += `
                <div class="CartItem">
                    <div class="Itempicture">
                        <div>
                            <a href="Detailedview.html"><img src="${item.image}" alt="Iphone 12" style="height: 120px;"></a>
                        </div>
                    </div>
                    <div class="Cartproductinfo">
                        <div class="Cartproductname">
                            <a href="Detailedview.html">${item.name}</a>
                        </div>
                        <div class="productnumber">
                            Product number: xxxxxxxx
                        </div>
                    </div>
                    <div class="minus">
                        -
                    </div>
                    <div class="buyamount">
                        <div class="amount">
                            Amount
                        </div>
                        <div class="amountcounter">
                            ${item.inCart}
                        </div>
                    </div>
                    <div class="plus">
                        +
                    </div>
                    <div>
                        <i class="far fa-trash-alt"></i>
                    </div>
                    <div class="pricestuff">
                        <div class="pricetext">
                            Price
                        </div>
                        <div class="priceamount">
                            ${item.price * item.inCart},00 €
                        </div>
                    </div>
		        </div>
                </div>
			    <hr style="width:auto;max-width:1220px;text-align:left;margin-left:25px;">
                `;
            });

            cartArea.innerHTML += `
                <div class="totalcosts">
                <div class="totalcosttext">
                    <div class="itemstotalcost">
                        Items
                    </div>
                    <div class="Shippingcosttext">
                        Shipping
                    </div>
                    <div class="deliverytime">
                        Estimated delivery 3-5 days
                    </div>
                </div>
                <div class="individualtotals">
                    <div class="itemstotalcostnumbers">
                        ${CostinCart},00 €
                    </div>
                    <div class="shippingcostnumbers">
                        0 €
                    </div>
                </div>
                </div>
                <hr style="width:300px;max-width:280px;text-align:left;margin-left:auto;margin-right:36px;">
                <div class="cartbottom">
                    <div class="continuecontainer">
                        <button class="continuebutton">Continue</button>
                    </div>
                    <div class="totalbuycost">
                        Total
                    </div>
                    <div class="totalcostmoney">
                        ${CostinCart},00 €
                    </div>
                </div>
                `
    }
}


KeepCartAmount ();
displayCart();










/* Failed Ventures 


function PopulateProducts() {
    let productnames = document.querySelectorAll(".Productname");

    for (let i=0; i < Productdata.length; i++) {
        productnames[i].innerhtml = Productdata[i].name;
    }
    console.log(productname[0]);
}


function addproducts() {
    for(let i=0; i < Productdata.length; i++) {
        AddSingleProduct(Productbox, productdata[i].image, productdata[i].name, productdata[i].highlights[1],productdata[i].highlights[2], productdata[i].highlights[3], productdata[i].price)
    }
}


function addSingleProduct() {
    let productbox = document.createElement('div');
    productbox.classList.add('productbox');

    let picture = document.createElement('div');
    picture.classList.add('Phonepicture');

    let productname = document.createElement('div');
    productname.classList.add('Productname');

    let info = document.createElement('div');
    info.classList.add('Productinfo');

    let ul = document.createElement('ul');

    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');

    let price = document.createElement('div');
    price.classList.add('Productprice');

    let buy = document.createElement('div');
    buy.classList.add('Buybox');

    let buybutton = document.createElement('button');
    buybutton.classList.add('BuyButton');

    let tocart = document.createElement('div');
    tocart.classList.add('addtocartext');

    productbox.append(picture);
    productbox.append(productname);
    productbox.append(info);
    productbox.append(price);
    productbox.append(buy);
    productbox.append(tocart);
    info.append(ul);
    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
    document.getElementById('maincontent').append(productbox);
  }


*/