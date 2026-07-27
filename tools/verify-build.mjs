import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const astroCli = fileURLToPath(new URL('../node_modules/astro/bin/astro.mjs', import.meta.url));
const result = spawnSync(process.execPath, [astroCli, 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY ?? 'Eric-Zhang007/Eric-Zhang007.github.io',
  },
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
