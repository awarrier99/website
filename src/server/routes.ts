import type { Application, Request, Response } from 'express';
import path from 'path';

export default (app: Application): void => {
  app.get('/*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../../public/app.html'));
  });
};
