DROP TABLE IF EXISTS dependents CASCADE;

CREATE TABLE dependents (
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  dependent_name VARCHAR(255) NOT NULL,
  dependent_phone VARCHAR(255) NOT NULL,
  dependent_email VARCHAR(255) NOT NULL,
  relationship VARCHAR(255) NOT NULL
);