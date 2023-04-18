import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import chalk from 'chalk';
import morgan from 'morgan';
import helmet from 'helmet';
import Debug from 'debug';

require('dotenv').config();

const debug = Debug('app');
const app: Express = express();

// declare global {
//   namespace Express {
//     export interface Request {
//       context: Context;
//     }
//   }
// }

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

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
