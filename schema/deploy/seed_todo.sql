-- Deploy onboarding:seed_todo to pg
-- requires: insert_todo
-- requires: todos
-- requires: appschema

BEGIN;

DO $$
BEGIN
    PERFORM todo_app.insert_todo('Task 1', false);
    PERFORM todo_app.insert_todo('Task 2', false);
    PERFORM todo_app.insert_todo('Task 3', false);
    PERFORM todo_app.insert_todo('Unfinished Task', false);
    PERFORM todo_app.insert_todo('Finished Task', true);
END$$;

COMMIT;
