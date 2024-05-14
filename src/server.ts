import express, { Express } from 'express';
import graphqlPlayground from 'graphql-playground-middleware-express';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { ApolloServer } from 'apollo-server-express';


const app: Express = express();

// middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

 // middleware
  app.use('/graphiql', graphqlPlayground({
    endpoint: '/graphql',
  }));
  
  // Start the server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphiql`);
  });
}

startServer();