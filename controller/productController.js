const productModel = require('./../model/product');
const response = require('../config/response');

module.exports.getAllProduct = async (req, res) => {
    try {
        const doc = await productModel.find().exec();
        response.sendSuccess(res, doc)
    }
    catch (err) {
        console.log("Err:-" + err);

        response.sendError(res, err, 400)
    }
}

module.exports.addProduct = async (req, res) => {
    try {
        const product = new productModel(req.body);
        const doc = await product.save();
        response.sendSuccess(res, doc)
    }
    catch (err) {
        console.log("Err:-" + err);

        response.sendError(res, err, 400)
    }
}

module.exports.getProductById = async (req, res) => {
    try {
        const doc = await productModel.findById(req.params.id).exec();
        response.sendSuccess(res, doc)
    }
    catch (err) {
        console.log("Err:-" + err);

        response.sendError(res, err, 400)
    }
}

module.exports.getProductByType = async (req, res) => {
    try {
        const doc = await productModel.find({ prod_type: req.params.prod_type }).exec();
        response.sendSuccess(res, doc)
    }
    catch (err) {
        console.log("Err:-" + err);

        response.sendError(res, err, 400)
    }
}


module.exports.rateProduct = async (req, res) => {
    try {
        if (Number(req.body.prod_rating) >= 0 && Number(req.body.prod_rating) <= 10) {
            const doc = await productModel.findByIdAndUpdate({ _id: req.body.id }, { prod_rating: Number(req.body.prod_rating) }).exec();
            response.sendSuccess(res, doc)
        }
        else {
            response.sendError(res, "rating is not valid. Please specify a number b/w 1-10", 400)
        }
    }
    catch (err) {
        console.log("Err:-" + err);

        response.sendError(res, err, 400)
    }
}

module.exports.searchProduct = async (req, res) => {
    try {
        const q=req.query.search_query;
        const doc = await productModel.find({"prod_name": {'$regex': '.*'+q+'.*'}})
        response.sendSuccess(res, doc)

    }
    catch (err) {
        console.log("Err:-" + err);

        response.sendError(res, err, 400)
    }
}