const User = require('./classes/User');
const Dog = require('./classes/Dog');
const Cat = require('./classes/Cat');
const Toy = require('./classes/Toy');

const argv = process.argv.slice(2);

switch (argv[0]) {
    case `--help`:
        console.log(`Show all info:`);
        console.log(`--create: put USER's information in such order => Name, Password`);
        console.log(`--generate: put DOG's information in such order => First name, Breed, Age`);
        console.log(`--produce: put CAT's information in such order => Nickname, Color, number of Siblings`);
        console.log(`--discover: put TOY's information in such order => Type, Material, Size`);
        break;

    case `--h`:
        console.log(`Show all info:`);
        console.log(`--create: put USER's information in such order => Name, Password`);
        console.log(`--generate: put DOG's information in such order => First name, Breed, Age`);
        console.log(`--produce: put CAT's information in such order => Nickname, Color, number of Siblings`);
        console.log(`--discover: put TOY's information in such order => Type, Material, Size`);
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






