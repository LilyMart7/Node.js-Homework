const path = require('path');
const fs = require(`fs`);
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {

//res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
let homeData = JSON.parse(fs.readFileSync('./dataBase/homeData.txt', 'utf8'));
res.render('home', {
    title: homeData.title,
    mainheader: homeData.capture

});

});

module.exports = router;