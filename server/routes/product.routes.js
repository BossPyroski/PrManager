const ProductController = require('../controllers/Product.controllers');
module.exports = app => {
    app.get('/api', ProductController.index);
    app.post('/api/product/create', ProductController.create);
    app.get('/api/product/:id', ProductController.show);
    app.put('/api/product/update/:id', ProductController.update);
    app.delete('/api/product/delete/:id', ProductController.delete);
    
}
