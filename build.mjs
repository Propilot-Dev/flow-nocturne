import * as esbuild from 'esbuild';

// Everything (Three.js, images, fonts) is inlined into ONE classic script so the
// wallpaper runs from file:// inside Lively's WebView2 with no fetch, no CORS, no CDN.
const watch = process.argv.includes('--watch');
const ctx = await esbuild.context({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: !watch,
  format: 'iife',
  target: ['chrome110'],
  outfile: 'dist/wallpaper.js',
  legalComments: 'none',
  logLevel: 'info',
  loader: { '.png': 'dataurl', '.ttf': 'dataurl' },
});
if (watch) await ctx.watch();
else { await ctx.rebuild(); await ctx.dispose(); }
