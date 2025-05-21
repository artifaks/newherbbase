
// This is a helper script to rename 'scientificName' to 'scientific_name' in all herb data files
// Usage instructions:
// 1. Install Node.js if you don't have it already
// 2. Open a terminal/command prompt in the project root directory
// 3. Run: node src/scripts/renamePropertyInHerbFiles.js
// This will update all herb data files to use 'scientific_name' instead of 'scientificName'

const fs = require('fs');
const path = require('path');

const herbsDirectory = path.join(__dirname, '..', 'data', 'herbs');

// Get all .ts files in the herbs directory
const herbFiles = fs.readdirSync(herbsDirectory)
  .filter(file => file.endsWith('.ts'));

console.log(`Found ${herbFiles.length} herb data files to process.`);

let filesModified = 0;

// Process each file
herbFiles.forEach(fileName => {
  const filePath = path.join(herbsDirectory, fileName);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace 'scientificName' with 'scientific_name'
  if (content.includes('scientificName')) {
    content = content.replace(/scientificName/g, 'scientific_name');
    fs.writeFileSync(filePath, content, 'utf8');
    filesModified++;
    console.log(`Updated: ${fileName}`);
  }
});

console.log(`Completed! Modified ${filesModified} files.`);
