-- Revert onboarding:insert_todo from pg

BEGIN;

DROP FUNCTION todo_app.insert_todo(TEXT, BOOLEAN);

COMMIT;
