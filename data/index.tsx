import * as Work from './work';
import { AllSkills, Skills } from './skills';

export interface Data {
  intro: string;
  work: any;
  skills: Skills;
  socialLinks: any[];
  tags: string[];
}

const work: any = Object.values(Work);
const uniqueTags: string[] = Array.from(new Set([].concat(...work.map((w) => w.tags))));

const data: Data = {
  intro:
    'Builder of software with a passion for learning. I specialize in application development and user experience design, however I enjoy the entire software development process. My favorite tech stack is currently TS Node & Next.js. I spend my days solving ui-infrastructure problems at Udacity.',
  work: work,
  tags: uniqueTags,
  skills: AllSkills,
  socialLinks: [
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kolbysisk/',
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/kolbysisk',
    },
    {
      title: 'Medium',
      url: 'https://medium.com/@kolbysisk/',
    },
    {
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/1933563/kolby',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/KolbySisk',
    },
  ],
};

export default data;
