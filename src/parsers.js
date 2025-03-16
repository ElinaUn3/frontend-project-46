import fs from 'fs';
import path from 'path';

export function parseFile(filepath) {
  const absolutePath = path.resolve(process.cwd(), filepath);

  // Читаем файл
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');

  return JSON.parse(fileContent);
}
