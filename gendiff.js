#!/usr/bin/env node

import { Command } from 'commander';
import { parseFile } from './src/parsers.js'; 
import genDiff from './src/genDiff.js'; 

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0') 
  .arguments('<filepath1> <filepath2>') 
  
  .action((filepath1, filepath2) => {
    const file1Data = parseFile(filepath1);

    const file2Data = parseFile(filepath2);

    const diff = genDiff(file1Data, file2Data);

    console.log(diff);
  })
  .parse(process.argv);