DROP TABLE IF EXISTS provided_resources CASCADE;

CREATE TABLE provided_resources (
  id SERIAL PRIMARY KEY NOT NULL,
  resource_id INTEGER REFERENCES resource_providers(id) ON DELETE CASCADE,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  resource_type VARCHAR(255) NOT NULL,
  provided BOOLEAN NOT NULL DEFAULT FALSE
);