const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ['jpeg', 'jpg', 'png', 'svg'],
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 100,
      },
    },
  ],
]);
