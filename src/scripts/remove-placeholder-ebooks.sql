-- First, let's identify the placeholder ebooks
WITH placeholder_ebooks AS (
  SELECT id, title, description, author, category, price
  FROM ebooks
  WHERE 
    -- Check for placeholder titles
    title ILIKE '%placeholder%' 
    OR title ILIKE '%sample%' 
    OR title ILIKE '%test%'
    OR title ILIKE '%demo%'
    OR title ILIKE '%example%'
    -- Check for missing or minimal content
    OR description IS NULL 
    OR LENGTH(description) < 50
    OR description ILIKE '%placeholder%'
    OR description ILIKE '%sample%'
    OR description ILIKE '%test%'
    -- Check for missing essential information
    OR author IS NULL 
    OR category IS NULL
    -- Check for invalid prices
    OR price IS NULL 
    OR price = 0
    -- Check for missing cover images
    OR cover_url IS NULL
    OR cover_url = ''
)
-- Show what will be deleted
SELECT * FROM placeholder_ebooks;

-- Delete the placeholder ebooks
DELETE FROM ebooks
WHERE id IN (
  SELECT id FROM placeholder_ebooks
);

-- Clean up any orphaned records in user_ebooks
DELETE FROM user_ebooks
WHERE ebook_id NOT IN (SELECT id FROM ebooks);

-- Reset the sequence
SELECT setval('ebooks_id_seq', (SELECT COALESCE(MAX(id), 1) FROM ebooks)); 