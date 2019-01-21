import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import {
  graphqlExpress,
  graphiqlExpress
} from 'graphql-server-express';
import {
  makeExecutableSchema
} from 'graphql-tools';

import routes from './rest/routes';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();

// Middlewares
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  secret: 'tafriheman',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// In this example, the formParam value is going to get morphed into form body format useful for printing.
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));
app.use(express.static('./../client-side/build'));

// Mount REST on /api
app.use('/api', routes);

// Mount GraphQL on /graphql
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers()
});
app.use('/graphql', graphqlExpress({
  schema
}));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(3000, () => console.log('Express app listening on localhost:3000'));