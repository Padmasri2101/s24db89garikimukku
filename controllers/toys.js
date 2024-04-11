var toys = require('../models/toys');
// List of all toys
exports.toys_list = function(req, res) {
 res.send('NOT IMPLEMENTED: toys list');
};
// for a specific toys.
exports.toys_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await toys.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

// Handle toys create on POST.
exports.toys_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: toys create POST');
};
// Handle toys delete from on DELETE.
exports.toys_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: toys delete DELETE ' + req.params.id);
};
 
// Handle toys update form on PUT.
exports.toys_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await toys.findById( req.params.id)
    // Do updates of properties
    if(req.body.toys_type)
    toUpdate.toys_type = req.body.toys_type;
    if(req.body.toys_size) toUpdate.toys_size = req.body.toys_size;
    if(req.body.toys_price) toUpdate.toys_price = req.body.toys_price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    

exports.toys_list = async function(req, res) {
    try{
    thetoys = await toys.find();
    res.send(thetoys);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


exports.toys_view_all_Page = async function(req, res) {
    try{
    thetoyss = await toys.find();
    res.render('toys', { title: 'toys Search Results', results: thetoyss });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// Handle toys create on POST.
exports.toys_create_post = async function(req, res) {
    console.log(req.body)
    let document = new toys();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"toys_type":"goat", "cost":12, "size":"large"}
    document.toys_type = req.body.toys_type;
    document.toys_size = req.body.toys_size;
    document.toys_price = req.body.toys_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle toys delete on DELETE.
exports.toys_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await toys.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle a show one view with id specified by query
exports.toys_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await toys.findById( req.query.id)
    res.render('toysdetail',
    { title: 'toys Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }


// Handle building the view for creating a toys.
// No body, no in path parameter, no query.
// Does not need to be async
exports.toys_create_Page = function(req, res) {
console.log("create view")
try{
res.render('toyscreate', { title: 'toys Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for updating a toys.
// query provides the id
exports.toys_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await toys.findById(req.query.id)
res.render('toysupdate', { title: 'toys Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
}

// Handle a delete one view with id from query
exports.toys_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await toys.findById(req.query.id)
    res.render('toysdelete', { title: 'toys Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    