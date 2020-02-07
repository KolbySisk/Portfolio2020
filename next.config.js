const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withVideos = require('next-videos');

require('dotenv').config();

module.exports = withPlugins([
  [withVideos],
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
