import Express from 'express';
import type { Request, Response, NextFunction } from 'express';
import path from 'path';
import logger from 'morgan';
// import { connect } from './util/db';
import createRoutes from './routes';
import './util/validateEnv';

const app = Express();

// Number cast for ts
const PORT: number = Number(process.env.PORT) || 3100;

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable global-require, import/no-extraneous-dependencies */
  const webpack = require('webpack');
  const wdm = require('webpack-dev-middleware');
  const config = require('../../webpack.config');
  /* eslint-enable global-require, import/no-extraneous-dependencies */

  const compiler = webpack(config);
  app.use(wdm(compiler, {
    publicPath: config.output.publicPath
  }));
}

app.use(logger('dev'));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(Express.static(path.resolve(__dirname, '../../public')));

app.use((req: Request, res: Response, next: NextFunction): void => {
  res.removeHeader('X-Powered-By');
  return next();
});

createRoutes(app);
// connect();

app.listen(PORT, (err: Error): void => {
  if (!err) console.log(`Auth is running on port ${PORT}! Load http://localhost:${PORT} in your browser.`);
});
