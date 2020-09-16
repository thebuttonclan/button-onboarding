-- Revert onboarding:adding_schema_for_application from pg

BEGIN;

DROP SCHEMA onboarding;

COMMIT;
