import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

var app = express();

app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true
})));

mongoose.connect('mongodb://localhost/graphql');

var server = app.listen(8080, () => {
    console.log('Listening at port', server.address().port);
});
