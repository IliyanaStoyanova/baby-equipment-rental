const mongoConnect = require('./database').mongoConnect;
var express = require('express');
const cors = require('cors');
const http = require('http');
var app = express();

const routes = {
    categoriesInfo: require('./router/categories'),
    productsInfo: require('./router/products')
};

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.set('port', 3000);

app.get('/', function (req, res) {
  res.send('REST API - Baby Equipment Rental');
});
app.get('/categories', routes.categoriesInfo.getAllCategories);
app.get('/categories/:categoryId', routes.categoriesInfo.getCategoryById);
app.get('/products', routes.productsInfo.getAllProducts);
app.get('/products/:productId', routes.productsInfo.getProductById);

mongoConnect(() => {
    http.createServer(app).listen(app.get('port'), () => {
        console.log(`Server started on port ${app.get('port')}`);
    });
});