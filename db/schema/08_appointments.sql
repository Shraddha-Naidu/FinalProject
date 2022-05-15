DROP TABLE IF EXISTS appointments CASCADE;

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY NOT NULL,
  socialworker_id INTEGER REFERENCES social_workers(id) ON DELETE CASCADE,
  applicant_id INTEGER REFERENCES applicants(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  date DATE NOT NULL
);