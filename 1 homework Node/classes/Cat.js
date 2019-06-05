class Cat {
    constructor(nickname, color, siblings) {
        this.nickname = nickname;
        this.color = color;
        this.siblings = siblings;
    }
    ShowCat() {
        console.log(`Nickname: ${this.nickname} Color: ${this.color} Number of siblings: ${this.siblings}`);
    }
}

module.exports  = Cat;