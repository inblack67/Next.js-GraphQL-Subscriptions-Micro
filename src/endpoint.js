const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? 'http://localhost:3000' : 'https://micro-subcriptions.vercel.app:443';
export const wsEndpoint = server.split('://')[1];