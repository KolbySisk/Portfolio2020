import * as Work from './work';

export interface Skill {
  title: string;
  imageName: string;
}

export interface Data {
  intro: string;
  work: any;
  skills: Skill[];
  socialLinks: any;
  tags: string[];
}

const work: any = Object.values(Work);
const uniqueTags: string[] = Array.from(new Set([].concat(...work.map(w => w.tags))));

const data: Data = {
  intro:
    'Builder of software with a passion for learning. I specialize in web development and user experience design, however I enjoy the entire software development process. My favorite tech stack is currently TS Node & Next.js. I spend my days working with a talented team building a design system at NCR.',
  work: work,
  tags: uniqueTags,
  skills: [
    { title: 'Action Script', imageName: 'action-script.png' },
    { title: 'Angular', imageName: 'angular.png' },
    { title: 'Azure', imageName: 'azure.png' },
    { title: 'Brand Design', imageName: 'branding.png' },
    { title: 'C#', imageName: 'c-sharp.png' },
    { title: 'Code Igniter', imageName: 'codeigniter.png' },
    { title: 'CSS3', imageName: 'css3.png' },
    { title: '.NET Core', imageName: 'dotnetcore.png' },
    { title: 'Drupal', imageName: 'drupal.png' },
    { title: 'Emotion', imageName: 'emotion.png' },
    { title: 'Express', imageName: 'express.png' },
    { title: 'Figma', imageName: 'figma.png' },
    { title: 'Firebase', imageName: 'firebase.png' },
    { title: 'Git', imageName: 'git.png' },
    { title: 'Grunt', imageName: 'grunt.png' },
    { title: 'Gulp', imageName: 'gulp.png' },
    { title: 'HTML5', imageName: 'html5.png' },
    { title: 'Illustrator', imageName: 'illustrator.png' },
    { title: 'Ionic', imageName: 'ionic.png' },
    { title: 'Jenkins', imageName: 'jenkins.png' },
    { title: 'jQuery', imageName: 'jquery.png' },
    { title: 'Kentico', imageName: 'kentico.png' },
    { title: 'Laravel', imageName: 'laravel.png' },
    { title: 'MongoDB', imageName: 'mongodb.png' },
    { title: 'MySQL', imageName: 'mysql.png' },
    { title: 'Next.js', imageName: 'nextjs.png' },
    { title: 'Node', imageName: 'node.png' },
    { title: 'Photoshop', imageName: 'photoshop.png' },
    { title: 'PHP', imageName: 'php.png' },
    { title: 'Plaid', imageName: 'plaid.png' },
    { title: 'PostgreSQL', imageName: 'postgresql.png' },
    { title: 'React Native', imageName: 'react-native.png' },
    { title: 'React', imageName: 'react.png' },
    { title: 'Redux', imageName: 'redux.png' },
    { title: 'RESTful API', imageName: 'restful.png' },
    { title: 'Sketch', imageName: 'sketch.png' },
    { title: 'Socket.IO', imageName: 'socket-io.png' },
    { title: 'Stripe', imageName: 'stripe.png' },
    { title: 'Subversion', imageName: 'subversion.png' },
    { title: 'TypeScript', imageName: 'typescript.png' },
    { title: 'UI Design', imageName: 'ui.png' },
    { title: 'UX Design', imageName: 'ux.png' },
    { title: 'Webpack', imageName: 'webpack.png' },
    { title: 'XD', imageName: 'xd.png' },
  ],
  socialLinks: [],
};

export default data;
