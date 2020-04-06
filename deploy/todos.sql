-- Deploy button_starter:todos to pg
-- requires: todo_app

BEGIN;

CREATE TABLE todo_app.todos (
  id INTEGER PRIMARY KEY,
  task VARCHAR(280) NOT NULL,
  completed BOOLEAN DEFAULT false,
  date_created DATE,
  date_updated DATE
);

COMMIT;
