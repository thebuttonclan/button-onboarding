-- Deploy onboarding:adding_update_trigger to pg
-- requires: adding_tasks_table

BEGIN;

CREATE OR REPLACE FUNCTION onboarding.trigger_update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.date_updated = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_timestamp
BEFORE UPDATE ON onboarding.tasks
FOR EACH ROW
EXECUTE PROCEDURE onboarding.trigger_update_timestamp();

COMMIT;
