const User = require('./classes/User');
const Dog = require('./classes/Dog');
const Cat = require('./classes/Cat');
const Toy = require('./classes/Toy');

const argv = process.argv.slice(2);

switch(argv[0]){
    case `--help`:
        console.log(`--help Show all info;`);
        break;

        case `--create`:
            let name = argv[1];
            let pass = argv[2];
            let users = new User(name, pass);
            users.ShowUser();
        break;

        case `--generate`:
                let firstname = argv[1];
                let breed = argv[2];
                let age = argv[3];
                let dogs = new Dog(firstname, breed, age);
                dogs.ShowDog();
            break;

        case `--produce`:
                let nickname = argv[1];
                let color = argv[2];
                let siblings = argv[3];
                let cats = new Cat(nickname, color, siblings);
                cats.ShowCat();
            break;
            
        case `--discover`:
                let type = argv[1];
                let material = argv[2];
                let size = argv[3];
                let toys = new Toy(type, material, size);
                toys.ShowToy();
            break;

    default:
        console.log(`use --help To list all options`);
        break;
}

let Bill = new User("Bill", 555);
Bill.ShowUser();

let Jack = new Dog("Jack", "doberman", 5);
Jack.ShowDog();

let Nika = new Cat("Nika", "white", 3);
Nika.ShowCat();

let Jerry = new Toy("mouse", "wood", "big");
Jerry.ShowToy();

