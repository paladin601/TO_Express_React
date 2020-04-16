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
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log("server run port " + app.get('port'));
})