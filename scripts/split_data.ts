import fs from 'fs';
import path from 'path';
import util from 'util';

// Since we are running this with ts-node, we can directly import the existing data
import { categories, subcategories, cities, products } from '../src/lib/data';

const dataDir = path.join(__dirname, '../src/data');
const categoriesDir = path.join(dataDir, 'categories');
const productsDir = path.join(dataDir, 'products');
const indexFile = path.join(dataDir, 'index.ts');

// Create directories if they don't exist
if (!fs.existsSync(categoriesDir)) fs.mkdirSync(categoriesDir, { recursive: true });
if (!fs.existsSync(productsDir)) fs.mkdirSync(productsDir, { recursive: true });

let indexExports = `// Auto-generated aggregator index\n\n`;

// Helper to write a JS object to a TS file cleanly
function writeObjectToTsFile(filePath: string, exportName: string, obj: any, typeAnnotation = '') {
  const objStr = util.inspect(obj, { depth: null, maxArrayLength: null });
  const content = `export const ${exportName}${typeAnnotation} = ${objStr};\n`;
  fs.writeFileSync(filePath, content, 'utf8');
}

// 1. Categories
const categoryImports: string[] = [];
const categoryNames: string[] = [];
categories.forEach(cat => {
  const safeName = cat.slug.replace(/-/g, '_');
  const fileName = `${cat.slug}.ts`;
  writeObjectToTsFile(path.join(categoriesDir, fileName), safeName, cat);
  categoryImports.push(`import { ${safeName} } from './categories/${cat.slug}';`);
  categoryNames.push(safeName);
});

// 2. Products
const productImports: string[] = [];
const productNames: string[] = [];
products.forEach(prod => {
  const safeName = prod.id; // e.g. p_1
  const fileName = `${prod.id}.ts`;
  writeObjectToTsFile(path.join(productsDir, fileName), safeName, prod);
  productImports.push(`import { ${safeName} } from './products/${prod.id}';`);
  productNames.push(safeName);
});

// 3. Subcategories & Cities (We can put them in the index or separate files)
// For simplicity, let's just write them into a shared.ts and re-export them
const sharedFile = path.join(dataDir, 'shared.ts');
const sharedContent = `
export const subcategories = ${util.inspect(subcategories, { depth: null, maxArrayLength: null })};
export const cities = ${util.inspect(cities, { depth: null, maxArrayLength: null })};
`;
fs.writeFileSync(sharedFile, sharedContent, 'utf8');

// 4. Write Index File
const finalIndexContent = `
${categoryImports.join('\n')}
${productImports.join('\n')}
import { subcategories, cities } from './shared';

export const categories = [
  ${categoryNames.join(',\n  ')}
];

export const products = [
  ${productNames.join(',\n  ')}
];

export { subcategories, cities };
`;

fs.writeFileSync(indexFile, finalIndexContent, 'utf8');

console.log('Successfully split monolithic data.ts into modular DB!');
