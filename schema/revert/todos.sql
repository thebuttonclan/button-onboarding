-- Revert onboarding:todos from pg

BEGIN;

DROP TABLE todo_app.todos;

COMMIT;
