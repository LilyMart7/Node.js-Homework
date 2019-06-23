class HomePage{
    constructor(){
        /* helpers */
        let center = `style = "text-align: center;"`;
        let left = `style = "text-align: left;"`;
        let right = `style = "text-align: right;"`;

        let blockCenter = `style = "display:block; text-align: center"`;

        let br = `<br>`;
        /* end helpers */
        
        /* url */

        let homePage = "http://localhost:3000/";
        let aboutPage = "http://localhost:3000/about";
        let contactPage = "http://localhost:3000/contact";

        /* end url */

        this.headStart = `<head>`;

        this.title = `<title> Home Page </title>`;

        this.headEnd = `</head>`



        this.bodyStart = `<body>`;

        this.capture = ` <h1 ${center}> Hello this is Home page </h1>`;
        this.text = `<p ${center}> This is a main page of our server, please check another pages</p>`

        this.linkAbout = `<a href = "${aboutPage}" ${blockCenter}>About page</a> ${br}`;
        this.linkContact = `<a href = "${contactPage}" ${blockCenter}>Contact page</a> ${br}`;

        this.bodyEnd = `</body>`;

    }
    ShowInfo(res){
        res.write(`${this.headStart}`);

        res.write(`${this.title}`);

        res.write(`${this.headEnd}`);




        res.write(`${this.bodyStart}`);

        res.write(`${this.capture}`);
        res.write(`${this.text}`);
        res.write(`${this.linkAbout}`);
        res.write(`${this.linkContact}`);

        res.write(`${this.bodyEnd}`);
    }
}

module.exports = HomePage;