-- Verify onboarding:adding_schema_for_application on pg

BEGIN;

DO $$
BEGIN
    ASSERT(SELECT pg_catalog.has_schema_privilege('onboarding', 'usage'));
END $$;

ROLLBACK;
