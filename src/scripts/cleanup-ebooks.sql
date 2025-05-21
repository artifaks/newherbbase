-- First, let's identify and remove duplicate ebooks based on title
WITH duplicates AS (
  SELECT title, MIN(id) as keep_id
  FROM ebooks
  GROUP BY title
  HAVING COUNT(*) > 1
)
DELETE FROM ebooks
WHERE id NOT IN (SELECT keep_id FROM duplicates)
AND title IN (SELECT title FROM duplicates);

-- Now remove placeholder ebooks (those with empty or minimal content)
DELETE FROM ebooks
WHERE 
  -- Remove ebooks with empty or very short descriptions
  (description IS NULL OR LENGTH(description) < 50)
  OR
  -- Remove ebooks with placeholder titles
  (title ILIKE '%placeholder%' OR title ILIKE '%sample%' OR title ILIKE '%test%')
  OR
  -- Remove ebooks with missing essential information
  (author IS NULL AND category IS NULL)
  OR
  -- Remove ebooks with zero or null price
  (price IS NULL OR price = 0);

-- Clean up any orphaned records in related tables
DELETE FROM user_ebooks
WHERE ebook_id NOT IN (SELECT id FROM ebooks);

-- Reset the sequence if needed
SELECT setval('ebooks_id_seq', (SELECT COALESCE(MAX(id), 1) FROM ebooks)); 