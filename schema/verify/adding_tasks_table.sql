-- Verify onboarding:adding_tasks_table on pg

BEGIN;

SELECT id, task, completed, date_created, date_updated FROM onboarding.tasks WHERE FALSE;

ROLLBACK;
