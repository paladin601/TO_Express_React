require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//Setting
app.set('port', process.env.PORT || 5001);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/crud', require('./router/router'));
//Folders static
let appStaticAssetsPath = path.join(__dirname, '../client')
app.use(express.static(appStaticAssetsPath));

app.listen(app.get('port'), () => {
    console.log("server run port " + app.get('port'));
})