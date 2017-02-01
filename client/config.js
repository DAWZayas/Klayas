export const db = {
  db: 'klayasdb',
};

export const server = {
  host: process.env.KLAYAS_SERVER_URL || 'localhost',
  port: process.env.KLAYAS_SERVER_PORT || 8080,
};

export const client = {
  host: process.env.KLAYAS_CLIENT_URL || 'localhost',
  port: process.env.KLAYAS_CLIENT_PORT || 3000,
};

export const oauthId = {
  googleID: process.env.GOOGLE_CLIENT_ID || '654514520892-8qr21gnh58o285ueeqq1tstes5qjiot0.apps.googleusercontent.com',
};
