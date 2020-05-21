import type { Response } from 'express';

export const validateInputs = (params: IParams, model: IParamsModel): boolean => {
  let ret = true;
  Object.entries(model)
    .forEach(([input, type]) => {
      const noValue = params[input] === undefined || params[input] === null;
      // allow for optional parameters by including '?' in model type (like 'string?')
      if (type.includes('?')) {
        // eslint-disable-next-line valid-typeof
        if (!noValue && typeof params[input] !== type.replace('?', '')) ret = false;
        // eslint-disable-next-line valid-typeof
      } else if (noValue || typeof params[input] !== type) ret = false;
    });
  return ret;
};

export const sendFailure = (msg: string, res: Response): Response => res.status(400)
  .json({
    success: false,
    error: msg
  });

export const sendError = (err: Error, res: Response): Response => {
  console.error(err);
  if (process.env.NODE_ENV === 'development') {
    return res.status(500).json({
      success: false,
      error: err.message,
      errorStack: err.stack
    });
  }
  return res.status(500).json({
    success: false,
    error: err.message
  });
};

export const sendInvalid = (res: Response): Response => res.status(422)
  .json({
    success: false,
    error: 'One or more parameters is missing or invalid'
  });

export const sendUnauthorized = (msg: string, res: Response): Response => res.status(401)
  .json({
    success: false,
    error: msg
  });
