-- Verify no duplicate titles remain
SELECT title, COUNT(*) as count
FROM ebooks
GROUP BY title
HAVING COUNT(*) > 1;

-- Verify no placeholder content remains
SELECT id, title, description
FROM ebooks
WHERE 
  description IS NULL 
  OR LENGTH(description) < 50
  OR title ILIKE '%placeholder%' 
  OR title ILIKE '%sample%' 
  OR title ILIKE '%test%'
  OR (author IS NULL AND category IS NULL)
  OR price IS NULL 
  OR price = 0;

-- Verify no orphaned records in user_ebooks
SELECT ue.*
FROM user_ebooks ue
LEFT JOIN ebooks e ON ue.ebook_id = e.id
WHERE e.id IS NULL;

-- Show summary of remaining ebooks
SELECT 
  COUNT(*) as total_ebooks,
  COUNT(DISTINCT title) as unique_titles,
  COUNT(DISTINCT author) as unique_authors,
  COUNT(DISTINCT category) as unique_categories,
  AVG(price) as average_price,
  MIN(price) as min_price,
  MAX(price) as max_price
FROM ebooks; 