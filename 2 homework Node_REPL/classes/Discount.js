class DiscountCard {
    constructor(name, amount) {
        this.name = name;
        this.cardNumber = Math.floor(Math.random() * 20455567);
        this.amount = parseInt(amount);
        this.discount = this.amount/10 *0.01; 
        this. amountWithDiscount =  this.amount/ 100 * this.discount;
        this.finalAmount =  parseInt(this.amount) - parseInt(this.amountWithDiscount);
    }
    ShowDiscountCard() {
        console.log(`Name: ${this.name} Card Number: ${this.cardNumber}, Amount: ${this.amount} $, Discount: ${this.discount}%, Discount Amount: ${this.amountWithDiscount} $, Final Amount: ${this.finalAmount} $`);
    }    

}

module.exports =  DiscountCard;