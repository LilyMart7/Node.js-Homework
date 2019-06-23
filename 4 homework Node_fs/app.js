const express = require('express');



const homePage = require('./routes/homePage');
const aboutPage = require('./routes/aboutPage');
const contactPage = require('./routes/contactPage');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "views");

app.use(homePage);
app.use(aboutPage);
app.use(contactPage);

app.use((req, res, next) => {
res.send('<h1>Not Found</h1>');
});




app.listen(3000);