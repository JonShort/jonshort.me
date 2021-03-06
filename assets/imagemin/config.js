import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
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
