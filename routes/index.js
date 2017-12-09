var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { department: 'all_departments' });
});

router.get('/department/:id', function (req, res) {
    res.render('index', { department: req.params.id });
});

module.exports = router;
