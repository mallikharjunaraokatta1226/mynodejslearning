const http = require('http');
const express = require('express');

const app = express();
app.use('/', (req, res, next)=> {
    console.log("This always run!");
    next();
});
app.use('/add-product', (req, res, next)=> {
    res.send('<form action="/product" method="post"><input type="text" name="title"/><button type="submit">Add product</button></form>');
});
app.use('/product', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
});
const server = http.createServer(app);
server.listen("3000");