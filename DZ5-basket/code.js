"use strict";

// Задание 2

let products = [
    {name: 'Планшет Sumsung', price: 350},
    {name: 'Телефон Sumsung', price: 300},
    {name: 'Планшет Huawei', price: 170},
    {name: 'Телефон Huawei', price: 250},
    {name: 'Планшет Xiaomi', price: 150},
    {name: 'Телефон Xiaomi', price: 80},
    {name: 'Телефон Iphone', price: 150}
];

function putProductName() { //добавляет на страницу название товара из массива
    let putProductName = document.getElementsByTagName('h2');
    for (var i = 0; i<putProductName.length; i++) {
        putProductName[i].innerHTML = products[i].name;
    };
    
};

putProductName();

function putProductPrice() { //добавляет на страницу цену товара из массива
    let putProductPrice = document.getElementsByTagName('span');
    for (var i = 0; i<putProductPrice.length; i++) {
        putProductPrice[i].innerHTML = products[i].price;
    };
};

putProductPrice();

function divBasket(b) { //пишет список товаров в корзине
let strBasket = "";
for (let productInBasket in b.goodList) {
strBasket = strBasket + "\n" + b.goodList[productInBasket].name + " - " + b.goodList[productInBasket].price + '$';
}
return strBasket;
};

let Basket = {
    goodList: [],
    countTotalPrice() { //считает общую стоимость товаров в корзине
        Basket.totalPrice = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            Basket.totalPrice += this.goodList[i].count * this.goodList[i].price;
        }
        console.log('Итого: ' + Basket.totalPrice + ' руб.')
    },

    countTotalNumber() { //считает общее колиество товаров в корзине
        Basket.sumCount = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            Basket.sumCount += this.goodList[i].count;
        }
        console.log('Товаров в корзине: ' + Basket.sumCount);
    },

    putProduct(name, price, count=1) { //добавляет товар в корзину
        let idx = this.goodList.findIndex(function(elem) {
            return elem.name === name;
        });
        if (idx === -1) {
            this.goodList.push({name, price, count});
        } else {
            this.goodList[idx].count += count;
        }
    },

    resMessage() { //выводит текст на странице с количеством и ценой всех товаров в корзине
        if (Basket.totalPrice === 0) {
            let div = document.getElementById('basket');
            div.innerText = 'Корзина пуста';
        } else {    
            let div = document.getElementById('basket');
            let result = 'Кол-во товара: ' + Basket.sumCount + ' Сумма покупок:  ' + Basket.totalPrice + ' $' + divBasket(Basket);
            div.innerText = result;
            console.log(result);
        }
    }
    };


function dataName() { //добавляет data-name data-price к кнопкам
    let button = document.getElementsByClassName('putToBasket');
    for (var i=0; i<button.length; i++) {
    button[i].setAttribute('data-name', products[i].name);
    button[i].setAttribute('data-price', products[i].price);
    };
};

dataName();

document.addEventListener('click', event => { //при клике проверяет что клик именно по кнопке, затем выполняет функции
    if(event.target.classList.contains('putToBasket')) { 
        Basket.putProduct(event.target.dataset.name, event.target.dataset.price);
        console.log(Basket.goodList);
        Basket.countTotalPrice();
        Basket.countTotalNumber();
        Basket.resMessage();
    };
});

