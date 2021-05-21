const ProductController = require('../controllers/Product.controllers');
module.exports = app => {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.create);
}
