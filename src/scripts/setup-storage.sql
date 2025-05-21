-- Create the herb.images bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('herb.images', 'herb.images', true)
ON CONFLICT (id) DO NOTHING;

-- Set up public access policy for the herb.images bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'herb.images');

-- Set up authenticated user upload policy
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'herb.images' AND
  auth.role() = 'authenticated'
);

-- Set up authenticated user update policy
CREATE POLICY "Authenticated users can update images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'herb.images' AND
  auth.role() = 'authenticated'
);

-- Set up authenticated user delete policy
CREATE POLICY "Authenticated users can delete images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'herb.images' AND
  auth.role() = 'authenticated'
); 