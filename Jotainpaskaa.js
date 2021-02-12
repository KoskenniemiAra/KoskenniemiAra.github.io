let carts = document.querySelectorAll('.addtocarttext');

for (let i=0; i < carts.length; i++) {
    console.log("hello");
}



const Productdata = [
    {
        name: 'Iphone 12 Pro',
        image: 'Iphone 12pro.png',
        price: '1329 €',
        highlights: [
            '6,1" Screen',
            '256GB',
            '5G capability'
        ]
    },
    {
        name: 'Iphone 12',
        image: 'Iphone 12.png',
        price: '899 €',
        highlights: [
            '5,4" Screen',
            '128GB',
            '5G capability'
        ]
    },
    {
        name: 'Iphone SE',
        image: 'Iphone SE.png',
        price: '529 €',
        highlights: [
            '4,7" Screen',
            '64GB',
            '4G LTE capability'
        ]
    },
    {
        name: 'Oneplus 8T',
        image: 'Oneplus 8T reso.png',
        price: '599€',
        highlights: [
            '6,55" Screen',
            '128GB',
            '5G capability'
        ]
    },
    {
        name: 'Oneplus 6',
        image: 'Oneplus 6.png',
        price: '399 €',
        highlights: [
            '6,28" Screen',
            '128GB',
            '4G LTE capability'
        ]
    },
    {
        name: 'Xiaomi Mi Note 10',
        image: 'Xiaomi mi note 10.png',
        price: '579 €',
        highlights: [
            '6,47" Screen',
            '128GB',
            '4G LTE capability'
        ]
    },
    {
        name: 'Samsung Galaxy S10 Lite',
        image: 'Samsung Galaxy S10 Lite.png',
        price: '619 €',
        highlights: [
            '6,7" Screen',
            '128GB',
            '4G LTE capability'
        ]
    },
    {
        name: 'Samsung Galaxy A20e',
        image: 'Samsung Galaxy A20e.png',
        price: '139 €',
        highlights: [
            '5,8" Screen',
            '32GB',
            '4G LTE capability'
        ]
    },
    {
        name: 'Honor 8S',
        image: 'Honor 8S.png',
        price: '119 €',
        highlights: [
            '5,71" Screen',
            '32GB',
            '4G LTE capability'
        ]
    },
    {
        name: 'Huawei p30 Lite',
        image: 'Huawei p30 lite.png',
        price: '219 €',
        highlights: [
            '6,15" Screen',
            '128GB',
            '4G LTE capability'
        ]
    },
];



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