DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY NOT NULL,
  provider VARCHAR(255) NOT NULL,
  provider_info VARCHAR(255) NOT NULL,
  resource_type VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
);