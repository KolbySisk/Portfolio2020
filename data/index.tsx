import * as Work from './work';
import { AllSkills, Skills } from './skills';

export interface Data {
  intro: string;
  work: any;
  skills: Skills;
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
  skills: AllSkills,
  socialLinks: [],
};

export default data;
