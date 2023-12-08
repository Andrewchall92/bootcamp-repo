-- Update fiction where id = 2 --
UPDATE fiction
SET name = "Candide"
WHERE id = 2;


-- same as
-- WHERE id = 002;

SELECT * FROM fiction;

-- +----+-----------------------+
-- | id | name                  |
-- +----+-----------------------+
-- |  1 | To Kill a Mockingbird |
-- |  2 | Candide               |
-- |  3 | War and Peace         |
-- +----+-----------------------+


-- Update fiction where id = 2 --
DELETE FROM fiction
WHERE id = 2;