var express = require('express');
const toys_controllers= require('../controllers/toys');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.

const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect("/login");
  }
  

/* GET toys */
router.get('/', toys_controllers.toys_view_all_Page );
/* GET detail toys page */
router.get('/detail', toys_controllers.toys_view_one_Page);

/* GET create toys page */
router.get('/create',secured, toys_controllers.toys_create_Page);

// GET create update page */
router.get('/update', secured,toys_controllers.toys_update_Page);

/* GET delete toys page */
router.get('/delete', secured,toys_controllers.toys_delete_Page);
module.exports = router;
