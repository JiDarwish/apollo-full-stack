import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default new ApolloServer({ schema, context: (headers, secrets) => ({ headers, secrets }) });