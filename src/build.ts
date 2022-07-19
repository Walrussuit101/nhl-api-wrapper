import { readFileSync, writeFileSync, copyFileSync } from 'fs';
import path from 'path';

const originalPkgPath = path.join(__dirname, '..', 'package.json');
const originalReadMePath = path.join(__dirname, '..', 'README.md');

const buildPath = path.join(__dirname, '..', 'dist');
const buildPkgPath = path.join(buildPath, 'package.json');
const buildReadMePath = path.join(buildPath, 'README.md');

const main = () => {
    const originalPkgString = readFileSync(originalPkgPath).toString('utf8');
    const originalPkgObj = JSON.parse(originalPkgString);

    // update pkg obj
    originalPkgObj.main = 'src/index.js';
    delete originalPkgObj.devDependencies;
    delete originalPkgObj.scripts;
    originalPkgObj.types = 'index.d.ts';

    // write out new pkg file and README
    writeFileSync(buildPkgPath, JSON.stringify(originalPkgObj, null, 2));
    copyFileSync(originalReadMePath, buildReadMePath);
}

try {
    main();
} catch(e) {
    console.error(e);
}
