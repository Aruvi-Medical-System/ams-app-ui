// mergeFiles.js
import fs from 'fs';
import path from 'path';

const folderPath = './src/hooks'; // ← change this to your folder

// Output file where all content will be appended
const outputFile = path.join(folderPath, 'combined_output.txt');

// Read all files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  // Filter only .jsx files
  const jsxFiles = files.filter(file => file.endsWith('.js'));

  // Clear output file before writing
  fs.writeFileSync(outputFile, '');

  // Process each file
  jsxFiles.forEach(file => {
    const filePath = path.join(folderPath, file);
    const fileData = fs.readFileSync(filePath, 'utf8');

    // Split lines
    const lines = fileData.split('\n');

    // Append each line
    fs.appendFileSync(outputFile, `\n// --- ${file} ---\n`);
    lines.forEach(line => {
      fs.appendFileSync(outputFile, line + '\n');
    });

    console.log(`✅ Processed: ${file}`);
  });

  console.log(`\n📁 Combined output saved to: ${outputFile}`);
});
