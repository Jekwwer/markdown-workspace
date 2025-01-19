const fs = require('fs');
const path = require('path');
const glob = require('glob');

const generateMarkdownTOC = (content) => {
  const tocPlaceholder = '[[toc]]';

  // Skip files without the placeholder
  if (!content.includes(tocPlaceholder)) return content;

  const lines = content.split('\n');
  const tocLines = [];

  lines.forEach((line) => {
    const match = line.match(/^(#{1,6})\s+(.*)$/); // Match Markdown headings
    if (match) {
      const level = match[1].length; // Number of `#` determines heading level
      const title = match[2].trim(); // Heading text
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-'); // Generate slug
      tocLines.push(`${'  '.repeat(level - 1)}- [${title}](#${slug})`); // TOC entry
    }
  });

  // Join the TOC lines and replace the placeholder
  const toc = tocLines.join('\n');
  return content.replace(tocPlaceholder, toc);
};

const updateMarkdownFilesWithTOC = (directory) => {
  // Find all Markdown files excluding node_modules
  const files = glob.sync('**/*.md', {
    cwd: directory,
    ignore: '**/node_modules/**',
  });

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Generate and insert the TOC
    const updatedContent = generateMarkdownTOC(content);

    // Write the updated content back to the file if it changed
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`Updated TOC: ${filePath}`);
    } else {
      console.log(`No changes: ${filePath}`);
    }
  });
};

// Start updating Markdown files from the project root
const directory = process.cwd();
updateMarkdownFilesWithTOC(directory);
