// const { models} = require('../models');
const router = require('express').Router();

// homepage route
// Categories displayed
router.get('/', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001${req.path} `);
        // res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    };
});

// login page route
router.get('/login', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001${req.path} `);
        // res.render('loginPage');
    } catch (err) {
        res.status(500).json(err);
    };
});

// signup page route
router.get('/signup', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001${req.path} `);
        // res.render('signupPage');
    } catch (err) {
        res.status(500).json(err);
    };
});



module.exports = router;