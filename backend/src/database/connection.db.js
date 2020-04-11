const mongoose = require('mongoose');

let uri = 'mongodb://ad-2019-mongo-link:27017/ad-2019';

if (process.env.NODE_ENV === 'production') {
    uri = process.env.MONGODB_URI;
    mongoose.connect(process.env.MONGODB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true  
    });
} else {
    mongoose.connect(uri, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

mongoose.connection.on('error', err => {
    console.error('Error in connection, my friend')
    console.error(err);
    process.exit(1)
})

mongoose.connection.on('connected', () => {
    console.log(`Connected in this uri: ${uri}`)
})