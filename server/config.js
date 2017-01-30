export const db = { // eslint-disable-line
  host: process.env.KLAYAS_DB_URL || 'localhost',
  port: process.env.KLAYAS_DB_PORT || 28015,
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

export const auth = {
  passwordSalt: process.env.KLAYAS_AUTH_PASSALT || 'ex8Qf63vlzRJ3qP4a2dRFhLAh3VJ29Fq2EhuyT0WUEHRzYJyQLhBvYVBzU6vAzrZ',
  sessionSecret: process.env.KLAYAS_AUTH_SESSECRET || 'Tq9lf9dJ6dXZpZAL4MPuXg49HbXzwd5cc1nXTubQlQtRFO0A6noI8KSRwK8sCSx2',
  jwtSecret: process.env.KLAYAS_AUTH_JWTSECRET || 'KzoIqADNt90gEVyt8vzw50kYojBKJcUwgYzNRFIrGZZ35t9EgkVhEkb9stJDNRRn',
};
