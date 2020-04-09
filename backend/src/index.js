const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('./database/connection.db');

const app = express();

app.set('port', process.env.PORT || 3333);
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
);

// routes
// ...

app.listen(app.get('port'), () => {
    console.log(`Applcation is running on ${app.get('port')}`);
});
