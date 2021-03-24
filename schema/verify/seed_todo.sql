-- Verify onboarding:seed_todo on pg

BEGIN;

DO $$
DECLARE
    todos_count INTEGER;
BEGIN
   todos_count := (SELECT last_value FROM todo_app.todos_id_seq);
   ASSERT todos_count = 5;
END $$;

ROLLBACK;
