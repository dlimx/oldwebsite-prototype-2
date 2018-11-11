const fs = require('fs');
const glob = require('glob');
const marked = require('marked');
const matter = require('gray-matter');

glob('./data/blog/*.md', (error, files) => {
  const fileArray = [];
  files.forEach(filename => {
    const file = fs.readFileSync(filename, 'utf8');
    const data = matter(file);
    data.content = marked(data.content);
    fileArray.push(data);
  });

  const sortedArray = fileArray.sort(
    (a, b) => new Date(b.data.date) - new Date(a.data.date),
  );

  const saveData = sortedArray.map(file => JSON.stringify(file)).join(',');

  fs.writeFileSync('public/blog.json', `{"posts":[${saveData}]}`);
});
