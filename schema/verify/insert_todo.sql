-- Verify onboarding:insert_todo on pg

BEGIN;

SELECT has_function_privilege('todo_app.insert_todo(text, boolean)', 'execute');

ROLLBACK;
