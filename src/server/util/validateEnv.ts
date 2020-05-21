import { validateInputs } from './tools';

const model = {};

if (!validateInputs(process.env, model)) throw new Error('Environment not properly set up');
