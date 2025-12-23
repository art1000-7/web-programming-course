// config.js
export const API_URL = 'https://api.example.com';
export const TIMEOUT = 5000;

export default function createConfig(env) {
  if (env === 'dev') {
    return { apiUrl: 'https://dev-api.example.com', timeout: 10000 };
  } else if (env === 'prod') {
    return { apiUrl: 'https://prod-api.example.com', timeout: 5000 };
  }
  return { apiUrl: API_URL, timeout: TIMEOUT };
}