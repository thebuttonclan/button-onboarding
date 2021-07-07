-- Deploy button_starter:todos to pg
-- requires: todo_app

BEGIN;

CREATE TABLE todo_app.todos (
  id SERIAL PRIMARY KEY,
  task VARCHAR(280) NOT NULL,
  completed BOOLEAN DEFAULT false,
  date_created TIMESTAMPTZ DEFAULT current_timestamp,
  date_updated TIMESTAMPTZ DEFAULT current_timestamp
);

COMMIT;
