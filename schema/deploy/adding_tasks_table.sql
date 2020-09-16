-- Deploy onboarding:adding_tasks_table to pg
-- requires: adding_schema_for_application

BEGIN;

CREATE TABLE onboarding.tasks (
    id              SERIAL PRIMARY KEY,
    task            VARCHAR,
    completed       BOOLEAN,
    date_created    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    date_updated    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);



COMMIT;
