DROP TABLE IF EXISTS flags CASCADE;

CREATE TABLE flags (
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE,
  note TEXT NOT NULL
);