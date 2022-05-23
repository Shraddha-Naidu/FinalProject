DROP TABLE IF EXISTS resource_providers CASCADE;

CREATE TABLE resource_providers (
  id SERIAL PRIMARY KEY NOT NULL,
  provider VARCHAR(255) NOT NULL,
  provider_phone VARCHAR(255) NOT NULL,
  provider_email VARCHAR(255) NOT NULL,
  provider_address VARCHAR(255) NOT NULL
);