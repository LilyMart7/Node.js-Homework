// // const fs = require('fs');
// // console.log(fs);

// function Person(name){
//     this.name = name;
//     this.hello = () =>{
//         console.log(`Name = ${this.name}` );
//     }
// }

// const Bill = new Person('Bill');
// Bill.hello();

// const args = process.args;
// console.log(args);

//=========================================================================

//console.log(process.argv);

// const args = process.argv.slice(2);
// console.log(args);

// switch (args[0]) {
//     case '--version':
//         console.log("v.0.1.0");
//         break;

//     case '--help':
//         console.log("--help");
//         console.log("--version");
//         break;

//     default:
//         console.log("use --help");
//         break;
// }

//================================== Create Person ===============================================
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
            let user = new User(name, pass);
            user.ShowUser();
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
                let dog = new Dog(nickname, color, siblings);
                dog.ShowCat();
            break;
            
        case `--produce`:
                let nickname = argv[1];
                let color = argv[2];
                let siblings = argv[3];
                let dog = new Dog(nickname, color, siblings);
                dog.ShowCat();
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

