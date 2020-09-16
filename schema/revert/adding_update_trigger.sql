-- Revert onboarding:adding_update_trigger from pg

BEGIN;

DROP TRIGGER update_timestamp ON onboarding.tasks;
DROP FUNCTION onboarding.trigger_update_timestamp();

COMMIT;
