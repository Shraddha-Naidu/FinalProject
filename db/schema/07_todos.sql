DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  item TEXT NOT NULL,
  date DATE NOT NULL,
  time VARCHAR(50) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE
);