// import { graphqlKoa } from 'graphql-server-koa'
// const graphqlKoa = require('graphql-server-koa')
// import {schema} from './schema/schema'
// const schema = require('./schema/schema');
module.exports = app => {
    app.get('/', app.controller.home.index);
    app.get('/news', app.controller.news.list);
    app.post('/form', app.controller.form.post);
    app.get('/user/:id', app.controller.user.info);
    // app.get('/graphql', graphqlKoa({ schema }))
}
