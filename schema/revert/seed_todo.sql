-- Revert onboarding:seed_todo from pg

BEGIN;

DELETE FROM todo_app.todos;
ALTER SEQUENCE todo_app.todos_id_seq RESTART;

COMMIT;
