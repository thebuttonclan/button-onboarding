-- Revert onboarding:appschema from pg

BEGIN;

-- XXX Add DDLs here.

DROP SCHEMA todo_app;

COMMIT;
