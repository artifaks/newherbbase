
/**
 * This script updates all herb data files to use scientific_name instead of scientificName
 * Run with: node src/scripts/updateHerbProperties.js
 */

const fs = require('fs');
const path = require('path');

const herbsDirectory = path.join(__dirname, '..', 'data', 'herbs');

// Get all .ts files in the herbs directory
const herbFiles = fs.readdirSync(herbsDirectory)
  .filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'types.ts');

console.log(`Found ${herbFiles.length} herb files to process`);

let totalUpdated = 0;

// Process each file
herbFiles.forEach(filename => {
  const filePath = path.join(herbsDirectory, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace scientificName with scientific_name
  if (content.includes('scientificName:')) {
    const updatedContent = content.replace(/scientificName:/g, 'scientific_name:');
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated ${filename}`);
    totalUpdated++;
  } else {
    console.log(`No changes needed for ${filename}`);
  }
});

console.log(`Completed! Updated ${totalUpdated} files.`);
