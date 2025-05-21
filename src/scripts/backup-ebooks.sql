-- Create a backup of the ebooks table
CREATE TABLE IF NOT EXISTS ebooks_backup AS 
SELECT * FROM ebooks;

-- Create a backup of user_ebooks table
CREATE TABLE IF NOT EXISTS user_ebooks_backup AS 
SELECT * FROM user_ebooks;

-- Add timestamp to track when backup was created
ALTER TABLE ebooks_backup ADD COLUMN backup_created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE user_ebooks_backup ADD COLUMN backup_created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP; 