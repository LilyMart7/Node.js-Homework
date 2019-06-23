const express = require('express');
const path = require('path');
const fs = require(`fs`);
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "views");

const homePage = require('./routes/homePage');
app.use(homePage);

const aboutPage = require('./routes/aboutPage');
app.use(aboutPage);

const contactPage = require('./routes/contactPage');
app.use(contactPage);

app.use((req, res, next) => {
res.send('<h1>Not Found</h1>');
});


app.listen(3000);