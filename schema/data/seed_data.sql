BEGIN;

INSERT INTO onboarding.tasks (task, completed) VALUES 
    ('Git Groceries', true), 
    ('Fix Car', false), 
    ('Git reset --hard', false);

COMMIT;