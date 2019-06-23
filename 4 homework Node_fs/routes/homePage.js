const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {

//res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));

res.render('home', {
    title: "Home page",
    mainheader: "This is a main header"

});

});

module.exports = router;