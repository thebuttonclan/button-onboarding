-- Revert onboarding:adding_tasks_table from pg

BEGIN;

DROP TABLE onboarding.tasks;

COMMIT;
