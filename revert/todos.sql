-- Revert button_starter:todos from pg

BEGIN;

DROP TABLE todo_app.todos;

COMMIT;
