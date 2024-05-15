import express, { Express } from 'express';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';


const app: Express = express();

// middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();

 // middleware
  app.use('/graphql', express.json(), expressMiddleware(server));
  
  // Start the server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
}

startServer();