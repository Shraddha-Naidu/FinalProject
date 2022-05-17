DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY NOT NULL,
  provider VARCHAR(255) NOT NULL,
  resource_type TEXT NOT NULL,
  provider_phone VARCHAR(255) NOT NULL,
  provider_email VARCHAR(255) NOT NULL,
  provider_address VARCHAR(255) NOT NULL
);