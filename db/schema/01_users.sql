DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  type VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL
);

-- Type refers to access type based on role, ex. Admin, Social Worker, or Provider.