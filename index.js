const express = require('express');
const bodyParser = require('body-parser')

const adminRoutes = require('./Routes/admin')
const shopRoutes = require('./Routes/shop')
const app = express();
const path = require('path')



app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'Views', 'pageNotFound.html'));
})


app.listen(8080, () => {
    console.log('running on 8080');
});