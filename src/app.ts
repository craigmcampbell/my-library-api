import Debug from 'debug';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import http from 'http';
import morgan from 'morgan';

// Apollo and GraphQL
import permissions from './graphql/permissions';
import schema from './graphql/schemaMap';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { applyMiddleware } from 'graphql-middleware';
import { expressMiddleware } from '@apollo/server/express4';

// Models
import { Context } from './models/Context.interface';

require('dotenv').config();

const debug = Debug('app');
const app: Express = express();
const httpServer = http.createServer(app);

const server = new ApolloServer<Context>({
  schema: applyMiddleware(schema, permissions), //TODO: Permissions not working
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

(async () => {
  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }), //TODO: Include prisma instance
    })
  );
})();

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());

// Routes

app.get('/', (req: Request, res: Response) => {
  res.json({ hello: 'world' });
});

const port = process.env.PORT;

process.on('uncaughtException', (err) => {
  console.error(`Uncaught exception: ${err.message}`);
  process.exit(1);
});

(async () => {
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
})();

debug(`🚀 Server ready at ${chalk.green(port)}`);
