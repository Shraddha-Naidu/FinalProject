DROP TABLE IF EXISTS clients CASCADE;

CREATE TABLE clients (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  age INTEGER NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  isHoused BOOLEAN NOT NULL DEFAULT FALSE,
  address VARCHAR(255) NOT NULL,
  known_locations VARCHAR(255) NOT NULL,
  dependants VARCHAR(255) NOT NULL,
  dependents_list VARCHAR (255),
  citizenship TEXT,
  resource_provided INTEGER REFERENCES resources(id),
  applied_at VARCHAR(50) NOT NULL,
  isActive BOOLEAN NOT NULL DEFAULT TRUE,
  status VARCHAR(255) NOT NULL
);

-- Additional adds: Citizenship, Ethnicity, Spoken Language.