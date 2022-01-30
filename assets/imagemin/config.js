(async () => {
  const { default: imagemin } = await import('imagemin');
  const imageminJpegtran = require('imagemin-jpegtran');
  const imageminPngquant = require('imagemin-pngquant');

  const rootPromise = imagemin(['assets/images/*.{jpg,png}'], {
    destination: 'src/images',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });

  const thumbPromise = imagemin(['assets/images/articleThumbs/*.{jpg,png}'], {
    destination: 'src/images/articleThumbs',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });

  const [rootFiles, thumbFiles] = await Promise.all([
    rootPromise,
    thumbPromise,
  ]);
  console.log(rootFiles, thumbFiles);
})();
