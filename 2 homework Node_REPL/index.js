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
        let name = argv[1];

        let data = new DiscountCard(name);
        data.ShowDiscountCard();

        break;

    default:
        console.log(`use --help To list all options`);
        break;
}

