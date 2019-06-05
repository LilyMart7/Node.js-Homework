class Toy {
    constructor(type, material, size) {
        this.type = type;
        this.material = material;
        this.size = size;
    }
    ShowToy() {
        console.log(`Type: ${this.type} Material: ${this.material} Size: ${this.size}`);
    }
}

module.exports  = Toy;