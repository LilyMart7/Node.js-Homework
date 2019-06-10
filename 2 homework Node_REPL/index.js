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
        let money = argv[2];
        let discount = argv[3];
        let moneyWithDiscount = argv[4];
        let allMoney = argv[5];

        let data = new DiscountCard(name, money, discount, moneyWithDiscount, allMoney);
        data.ShowDiscountCard();

        break;

    default:
        console.log(`use --help To list all options`);
        break;
}

