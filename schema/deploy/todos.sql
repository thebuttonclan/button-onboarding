-- Deploy onboarding:todos to pg
-- requires: appschema

BEGIN;

SET client_min_messages = 'warning';

CREATE TABLE todo_app.todos (
    id  SERIAL PRIMARY KEY,
    task  TEXT  NOT NULL,
    completed   BOOLEAN NOT NULL DEFAULT FALSE,
    date_created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    date_updated TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMIT;
