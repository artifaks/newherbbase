import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const HERB_IMAGES_DIR = path.join(__dirname, '../../public/herbs');
const HERB_IMAGES_BUCKET = 'herb.images';

async function uploadHerbImages() {
  try {
    // Read all files from the herbs directory
    const files = fs.readdirSync(HERB_IMAGES_DIR);
    
    for (const file of files) {
      if (!file.match(/\.(jpg|jpeg|png|webp)$/i)) continue;
      
      const filePath = path.join(HERB_IMAGES_DIR, file);
      const fileContent = fs.readFileSync(filePath);
      
      console.log(`Uploading ${file}...`);
      
      const { data, error } = await supabase.storage
        .from(HERB_IMAGES_BUCKET)
        .upload(file, fileContent, {
          contentType: `image/${path.extname(file).slice(1)}`,
          upsert: true
        });
        
      if (error) {
        console.error(`Error uploading ${file}:`, error);
        continue;
      }
      
      console.log(`Successfully uploaded ${file}`);
    }
    
    console.log('All images uploaded successfully!');
  } catch (error) {
    console.error('Error uploading images:', error);
  }
}

uploadHerbImages(); 