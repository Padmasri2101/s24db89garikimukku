var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var toys_controller = require('../controllers/toys');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// TOYS ROUTES ///
// POST request for creating a toys.
router.post('/toys', toys_controller.toys_create_post);
// DELETE request to delete toys.
router.delete('/toys/:id', toys_controller.toys_delete);
// PUT request to update toys.
router.put('/toys/:id', toys_controller.toys_update_put);
// GET request for one toys.
router.get('/toys/:id', toys_controller.toys_detail);
// GET request for list of all toys items.
router.get('/toys', toys_controller.toys_list);
module.exports = router;
// // API for our resources
// exports.api = function(req, res) {
// res.write('[');
// res.write('{"resource":"toys", ');
// res.write(' "verbs":["GET","PUT", "DELETE"] ');
// res.write('}');
// res.write(']')
// res.send();
// };
