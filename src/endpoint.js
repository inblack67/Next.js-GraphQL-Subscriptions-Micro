const dev = process.env.NODE_ENV !== 'production';
const host = window.location.host;
export const server = dev ? 'localhost:3000' : host;