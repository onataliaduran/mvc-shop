const express = require('express');
const path = require('path');

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const db = require('./utils/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// db.execute('SELECT * FROM products')
//     .then(result => {
//         console.log('RESULT', result);
//     })
//     .catch(err => {
//         console.log('ERR', err);
//     });

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(5000);
