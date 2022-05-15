/* id SERIAL PRIMARY KEY NOT NULL,
  socialworker_id INTEGER REFERENCES social_workers(id) ON DELETE CASCADE,
  applicant_id INTEGER REFERENCES applicants(id) ON DELETE CASCADE,
  item TEXT NOT NULL,
  date DATE NOT NULL,
  time TIMESTAMP NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE */
INSERT INTO todos (socialworker_id, applicant_id, item, date, time, completed)
VALUES
(1, 1, 'test item', '01-01-2022', '04/23/17 04:34:22 +0000', true),
(2, 3, 'test item1', '02-01-2022', '04/23/22 04:34:22 +0000', false),
(4, 2, 'test item2', '03-01-2022', '02/14/22 08:44:24 +0000', true),
(3, 2, 'test item3', '04-01-2022', '02/12/22 18:44:24 +0000', false)