-- Verify onboarding:todos on pg

BEGIN;

SELECT id, task, completed, date_created, date_updated
  FROM todo_app.todos
 WHERE FALSE;

ROLLBACK;
