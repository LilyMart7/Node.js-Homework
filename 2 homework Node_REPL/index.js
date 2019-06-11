const DiscountCard = require('./classes/Discount');

const argv = process.argv.slice(2);

switch (argv[0]) {
    case `--help`:
        console.log(`Show all info:`);
        console.log(`name: put your real Name`);
        break;

    case `--h`:
        console.log(`Show all info:`);
        console.log(`name: put your real Name`);
        break;

    case `--create`:
        let name = argv[1]
        let amount = argv[2];
        let discount = argv[3];
        let amountWithDiscount = argv[4];
        let finalAmount = argv[5];

        let data = new DiscountCard(name,amount, discount, amountWithDiscount, finalAmount);
        data.ShowDiscountCard();

        break;

    default:
        console.log(`use --help To list all options`);
        break;
}

