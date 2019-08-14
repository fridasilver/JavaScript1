"use strict";

// Задание 2

/*let products = [
    {name: 'ежедневник', price: 350},
    {name: 'блокнот на спирали', price: 30},
    {name: 'тетрадь 24 листа в клетку', price: 17},
    {name: 'линейка 20 см', price: 25},
    {name: 'ручка синяя шариковая', price: 15},
    {name: 'ручка синяя гелевая', price: 30},
    {name: 'набор ручек цветных 12 штук', price: 150}
];*/

let products = [];

function putProductName() { //добавляет текстовое содержимое h2  в массив
	let putProductName = document.getElementsByTagName('h2');
	for (var i = 0; i < putProductName.length; i++) {
       var current = putProductName[i];
       if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
       products.push({name: current.textContent});
   	};
    };
	console.log(products);
};

window.onload = putProductName;

function putProductPrice() { //добавляет текстовое содержимое span  в массив
	let putProductPrice = document.getElementsByTagName('span');
	for (var i = 0; i < putProductPrice.length; i++) {
       var current = putProductPrice[i];
       if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
       products.push({price: Number(current.textContent)});
   	};
    };
	console.log(products);
};

window.onload = putProductPrice;

function divBasket(b) { //пишет список товаров в корзине
let strBasket = "";
for (let productInBasket in b.goodList) {
strBasket = strBasket + "\n" + b.goodList[productInBasket].name + " - " + b.goodList[productInBasket].price;
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

    putProduct(prod, count) { //добавляет товар в корзину
        let idx = this.goodList.findIndex(function(elem) {
            return elem.name === prod.name;
        });
        if (idx === -1) {
            this.goodList.push(Object.assign({}, prod));
            this.goodList[this.goodList.length - 1].count = count;
        } else {
            this.goodList[idx].count += count;
        }
    },

    resMessage() { //выводит текст на странице с количеством и ценой всех товаров в корзине
        if (Basket.totalPrice === 0) {
            let div = document.getElementById('basket');
            div.innerText = 'Корзина пуста';
           // alert('Корзина пуста');
        } else {    
           // alert('В корзине ' + Basket.sumCount + ' товаров на сумму ' + Basket.totalPrice + ' рублей.');
            let div = document.getElementById('basket');
            let result = 'Сумма покупок: ' + Basket.sumCount + ' Кол-во товара: ' + Basket.totalPrice + divBasket(Basket);
            div.innerText = result;
            console.log(result);
        }
    }
    };

for (let i = 0; i < products.length; i+=2) {
    Basket.putProduct(products[i], 1);
}

for (let i = 1; i < products.length; i+=2) {
    Basket.putProduct(products[i], 2);
}

Basket.countTotalPrice();
Basket.countTotalNumber();
Basket.resMessage();