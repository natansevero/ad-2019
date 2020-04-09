const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('./database/connection.db');

const app = express();

const indexRoute = require('./routes');
const personRoutes = require('./routes/v1/person.routes');

app.set('port', process.env.PORT || 3333);
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
);

app.use(indexRoute);
app.use(personRoutes);

app.listen(app.get('port'), () => {
    console.log(`Applcation is running on port ${app.get('port')}`);
});
