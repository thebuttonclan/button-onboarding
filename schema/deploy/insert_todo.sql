-- Deploy onboarding:insert_todo to pg
-- requires: todos
-- requires: appschema

BEGIN;

CREATE OR REPLACE FUNCTION todo_app.insert_todo(
    task TEXT,
    completed BOOLEAN
) RETURNS VOID LANGUAGE SQL SECURITY DEFINER AS $$
    INSERT INTO todo_app.todos (task, completed) VALUES($1, $2);
$$;

COMMIT;
