require('esbuild')
  .build({
    entryPoints: ['src/app.jsx'],
    bundle: true,
    outfile: 'public/bundle.js',
  })
  .catch(() => process.exit(1));
