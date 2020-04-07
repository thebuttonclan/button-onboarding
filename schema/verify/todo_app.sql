-- Verify button_starter:todo_app on pg

BEGIN;

-- Raise an exception (divide by zero) if schema does not exist:
SELECT 1/COUNT(*) FROM information_schema.schemata WHERE schema_name = 'todo_app';

ROLLBACK;
