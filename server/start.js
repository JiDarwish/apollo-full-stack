import graphqlServer from './graphqlServer';

graphqlServer.listen({ http: { path: 'http://localhost', port: 3001 } })
  .then(({ url }) => console.log(`Server listening on ${url}`))
  .catch(console.log);
