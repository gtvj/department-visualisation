var express = require('express');
var router = express.Router();
const fs = require("fs");
let department_codes;

fs.readdir("public/data", (err, files) => {
    if (err) {
        throw err;
    }
    department_codes = files.map((file) => file.replace('.js', ''));
});

router.get('/', function (req, res) {
    res.render('index', { department: 'all_departments', codes: department_codes });
});

router.get('/department/:id', function (req, res) {
    res.render('index', { department: req.params.id, codes: department_codes });
});

module.exports = router;
