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
  {
    exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/work': { page: '/work' },
        '/work/nui': { page: '/work/nui' },
        '/work/eraise': { page: '/work/eraise' },
        '/work/design-systems-in-2020': { page: '/work/design-systems-in-2020' },
        '/work/corkcicle': { page: '/work/corkcicle' },
        '/work/data-inc': { page: '/work/data-inc' },
      };
    },
  },
]);
