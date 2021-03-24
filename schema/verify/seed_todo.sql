-- Verify onboarding:seed_todo on pg

BEGIN;

DO $$
DECLARE
    count INTEGER;
BEGIN
   count := (SELECT last_value FROM todo_app.todos_id_seq);
   ASSERT count = 2;
END $$;

ROLLBACK;
