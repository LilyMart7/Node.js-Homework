class DiscountCard {
    constructor(name, money) {
        this.name = name;
        this.cardNumber = Math.floor(Math.random() * 20455567);
        this.money = parseInt(money);
        this.discount = this.money/10 *0.01; 
        this. moneyWithDiscount =  this.money/ 100 * this.discount;
        this.allMoney =  parseInt(this.money) - parseInt(this.moneyWithDiscount);
    }
    ShowDiscountCard() {
        console.log(`Name: ${this.name} Card Number: ${this.cardNumber}, Amount: ${this.money} Discount: ${this.discount}%, Discount Amount: ${this.moneyWithDiscount}, Final Amount: ${this.allMoney}`);
    }    


}

module.exports =  DiscountCard;