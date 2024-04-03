var express = require('express');
const toys_controlers= require('../controllers/toys');
var router = express.Router();
/* GET toyss */
router.get('/', toys_controlers.toys_view_all_Page );
module.exports = router;
