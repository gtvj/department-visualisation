var express = require('express');
var router = express.Router();
const fs = require("fs");
let department_codes;
var db = require('../database');
const { decorated_guides } = require('../decorated_guides');

// First clear the database
db()
    .then(() => {
        db.ResearchGuide.clear()
    });

db()
    .then(() => {
        db.ResearchGuide.populate(decorated_guides)
    });

fs.readdir("public/data", (err, files) => {
    if (err) {
        throw err;
    }
    department_codes = files.map((file) => file.replace('.js', ''));
});

router.get('/', (req, res) => {
    res.render('index', { department: 'all_departments', codes: department_codes });
});

router.get('/department/', (req, res) => {
    res.render('department', { department: 'all_departments', codes: department_codes });
});

router.get('/department/:id', (req, res) => {
    res.render('department', { department: req.params.id, codes: department_codes });
});

router.get('/guides/', (req, res) => {
    db().then(() => {
        db.ResearchGuide.all()
            .then(guides => {
                res.render('guides', { guides: guides });
            })
    });
});

router.get('/guide/', (req, res) => {
    db().then(() => {
        db.ResearchGuide.find_guides_with_name_containing(req.query.name)
            .then(guides => {
                res.render('guides', { guides: guides });
            })
    });
});

module.exports = router;
