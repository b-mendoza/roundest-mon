export const getCorrectUrl = () => {
  const hasVercelUrl = typeof process.env.VERCEL_URL === 'string';

  const domain = hasVercelUrl ? process.env.VERCEL_URL : 'localhost';

  const port = hasVercelUrl ? undefined : 3000;

  const protocol = hasVercelUrl ? 'https' : 'http';

  const url = `${protocol}://${domain}`;

  return process.env.NODE_ENV !== 'production' ? `${url}:${port}` : url;
};
