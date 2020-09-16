-- Verify onboarding:adding_update_trigger on pg

BEGIN;

SELECT has_function_privilege('onboarding.trigger_update_timestamp()', 'execute');

DO $$
BEGIN
    PERFORM tgname
    FROM pg_trigger -- internal postgres table for triggers
    WHERE NOT tgisinternal
    AND tgname = 'update_timestamp'
    and tgrelid = 'onboarding.tasks'::regclass;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Trigger update timestamp not found';
    END IF;
END $$;

ROLLBACK;
