const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? 'localhost:3000' : process.env.NEXT_APP_SERVER_URL;