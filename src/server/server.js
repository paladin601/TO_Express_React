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

//Folders static
let appStaticAssetsPath = path.join(__dirname, '../client')
//Routes
//Routes Client
require('../router/router-client')(express, app, appStaticAssetsPath);
//Routes Api
app.use('/api/crud', require('../router/router-server'));

app.listen(app.get('port'), () => {
    console.log("server run port " + app.get('port'));
})