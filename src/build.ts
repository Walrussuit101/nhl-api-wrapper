import { readFileSync, writeFileSync, copyFileSync } from 'fs';
import { Generator } from 'npm-dts';
import { build } from 'esbuild';
import path from 'path';

const originalPkgPath = path.join(__dirname, '..', 'package.json');
const originalReadMePath = path.join(__dirname, '..', 'README.md');
const originalLicensePath = path.join(__dirname, '..', 'LICENSE');

const buildPath = path.join(__dirname, '..', 'build');
const buildPkgPath = path.join(buildPath, 'package.json');
const buildReadMePath = path.join(buildPath, 'README.md');
const buildLicensePath = path.join(buildPath, 'LICENSE');

const main = async () => {
    // compile ts to single js file
    await build({
        platform: 'node',
        entryPoints: ['src/index.ts'],
        outfile: 'build/index.js',
        bundle: true,
        external: ['axios', 'zod']
    });

    // generate single types declaration file
    const types = new Generator({
        entry: 'index.ts', // relative to 'rootDir' in tsconfig
        output: 'build/index.d.ts'
    });
    await types.generate();

    // update pkg obj
    const originalPkgString = readFileSync(originalPkgPath).toString('utf8');
    const originalPkgObj = JSON.parse(originalPkgString);

    originalPkgObj.main = 'index.js';
    delete originalPkgObj.devDependencies;
    delete originalPkgObj.scripts;
    originalPkgObj.types = 'index.d.ts';

    // write out new pkg file and README
    writeFileSync(buildPkgPath, JSON.stringify(originalPkgObj, null, 2));
    copyFileSync(originalReadMePath, buildReadMePath);
    copyFileSync(originalLicensePath, buildLicensePath);
}

try {
    main();
} catch(e) {
    console.error(e);
}
