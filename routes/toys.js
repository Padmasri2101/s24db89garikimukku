var express = require('express');
const toys_controllers= require('../controllers/toys');
var router = express.Router();
/* GET toys */
router.get('/', toys_controllers.toys_view_all_Page );
/* GET detail toys page */
router.get('/detail', toys_controllers.toys_view_one_Page);

/* GET create toys page */
router.get('/create', toys_controllers.toys_create_Page);

// GET create update page */
router.get('/update', toys_controllers.toys_update_Page);

/* GET delete toys page */
router.get('/delete', toys_controllers.toys_delete_Page);
module.exports = router;
