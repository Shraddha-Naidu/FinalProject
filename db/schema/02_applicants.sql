DROP TABLE IF EXISTS applicants CASCADE;

CREATE TABLE applicants (
  id SERIAL PRIMARY KEY NOT NULL,
  socialworker_id INTEGER REFERENCES social_workers(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  isHoused BOOLEAN NOT NULL DEFAULT FALSE,
  address VARCHAR(255) NOT NULL,
  known_locations TEXT,
  dependants BOOLEAN DEFAULT FALSE,
  dependants_list TEXT,
  resource_requested TEXT REFERENCES resources(resource_type) ON DELETE CASCADE,
  resource_provided INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  isFlagged BOOLEAN NOT NULL DEFAULT FALSE,
  applied_at DATE NOT NULL DEFAULT CURRENT_DATE,
  isActive BOOLEAN NOT NULL DEFAULT TRUE
);