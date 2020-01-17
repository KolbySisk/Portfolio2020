export interface Skill {
  title: string;
  imageName: string;
}

export interface Skills {
  [key: string]: Skill;
}

export const AllSkills: Skills = {
  as: { title: 'Action Script', imageName: 'action-script.png' },
  angular: { title: 'Angular', imageName: 'angular.png' },
  azure: { title: 'Azure', imageName: 'azure.png' },
  brand: { title: 'Brand Design', imageName: 'branding.png' },
  csharp: { title: 'C#', imageName: 'c-sharp.png' },
  codeigniter: { title: 'Code Igniter', imageName: 'codeigniter.png' },
  cs3: { title: 'CSS3', imageName: 'css3.png' },
  dotnetcore: { title: '.NET Core', imageName: 'dotnetcore.png' },
  drupal: { title: 'Drupal', imageName: 'drupal.png' },
  emotion: { title: 'Emotion', imageName: 'emotion.png' },
  express: { title: 'Express', imageName: 'express.png' },
  figma: { title: 'Figma', imageName: 'figma.png' },
  firebase: { title: 'Firebase', imageName: 'firebase.png' },
  git: { title: 'Git', imageName: 'git.png' },
  grunt: { title: 'Grunt', imageName: 'grunt.png' },
  gulp: { title: 'Gulp', imageName: 'gulp.png' },
  html5: { title: 'HTML5', imageName: 'html5.png' },
  illustrator: { title: 'Illustrator', imageName: 'illustrator.png' },
  ionic: { title: 'Ionic', imageName: 'ionic.png' },
  jenkins: { title: 'Jenkins', imageName: 'jenkins.png' },
  jquery: { title: 'jQuery', imageName: 'jquery.png' },
  kentico: { title: 'Kentico', imageName: 'kentico.png' },
  larvel: { title: 'Laravel', imageName: 'laravel.png' },
  mondgodb: { title: 'MongoDB', imageName: 'mongodb.png' },
  mysql: { title: 'MySQL', imageName: 'mysql.png' },
  nextjs: { title: 'Next.js', imageName: 'nextjs.png' },
  node: { title: 'Node', imageName: 'node.png' },
  ps: { title: 'Photoshop', imageName: 'photoshop.png' },
  php: { title: 'PHP', imageName: 'php.png' },
  plaid: { title: 'Plaid', imageName: 'plaid.png' },
  postgresql: { title: 'PostgreSQL', imageName: 'postgresql.png' },
  reactnative: { title: 'React Native', imageName: 'react-native.png' },
  react: { title: 'React', imageName: 'react.png' },
  redux: { title: 'Redux', imageName: 'redux.png' },
  rest: { title: 'RESTful API', imageName: 'restful.png' },
  sketch: { title: 'Sketch', imageName: 'sketch.png' },
  socketio: { title: 'Socket.IO', imageName: 'socket-io.png' },
  stripe: { title: 'Stripe', imageName: 'stripe.png' },
  subversion: { title: 'Subversion', imageName: 'subversion.png' },
  typescript: { title: 'TypeScript', imageName: 'typescript.png' },
  ui: { title: 'UI Design', imageName: 'ui.png' },
  ux: { title: 'UX Design', imageName: 'ux.png' },
  webpack: { title: 'Webpack', imageName: 'webpack.png' },
  xd: { title: 'XD', imageName: 'xd.png' },
};
