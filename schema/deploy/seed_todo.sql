-- Deploy onboarding:seed_todo to pg
-- requires: insert_todo
-- requires: todos
-- requires: appschema

BEGIN;

DO $$
BEGIN
    PERFORM todo_app.insert_todo('Unfinished Task', false);
    PERFORM todo_app.insert_todo('Finished Task', true);
END$$;

COMMIT;
