const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? 'localhost:3000' : 'micro-subcriptions.vercel.app';