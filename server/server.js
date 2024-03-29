import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cookiParser from 'cookie-parser';

import schema from './graphqlServer'

const app = express();

app.use(cookiParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/graphql', graphqlExpress((req, res) => {
  // do stuff for all users maybe
  return {
    schema,
    context: { req, res }
  }
}));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.get('/', (req, res) => {
  res.cookie()
})

export default app;
