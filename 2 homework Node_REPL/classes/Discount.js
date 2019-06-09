class DiscountCard {
    constructor(name) {
        this.name = name;
        this.cardNumber = Math.floor(Math.random() * 20455567);
        this.discount = 1;
      
    }
    ShowDiscount() {
        console.log(`Name: ${this.name}  Card number: ${this.cardNumber } Current discount: ${this.discount}`)
    }
  
}

module.exports =  Discount;