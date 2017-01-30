export const db = { // eslint-disable-line
  host: process.env.KLAYAS_DB_URL || 'localhost',
  port: process.env.KLAYAS_DB_PORT || 28015,
  db: 'klayasdb',
};

export const auth = {
  passwordSalt: 'ex8Qf63vlzRJ3qP4a2dRFhLAh3VJ29Fq2EhuyT0WUEHRzYJyQLhBvYVBzU6vAzrZ',
  sessionSecret: 'Tq9lf9dJ6dXZpZAL4MPuXg49HbXzwd5cc1nXTubQlQtRFO0A6noI8KSRwK8sCSx2',
  jwtSecret: 'KzoIqADNt90gEVyt8vzw50kYojBKJcUwgYzNRFIrGZZ35t9EgkVhEkb9stJDNRRn',
};
