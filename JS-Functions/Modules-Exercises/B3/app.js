// app.js
import createConfig, { API_URL, TIMEOUT } from './config.js';

console.log('API_URL:', API_URL);
console.log('TIMEOUT:', TIMEOUT);

const devConfig = createConfig('dev');
console.log('Dev config:', devConfig);