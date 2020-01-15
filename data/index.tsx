import * as Work from './work';

export interface Skill {
  title: string;
  expertise: number;
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
    { title: 'React', expertise: 100 },
    { title: 'Angular', expertise: 100 },
    { title: 'TypeScript', expertise: 100 },
    { title: 'Node', expertise: 100 },
    { title: '.Net Core', expertise: 90 },
    { title: 'PostgreSQL', expertise: 80 },
    { title: 'Dev Ops & Tooling', expertise: 80 },
    { title: 'UX Design', expertise: 100 },
    { title: 'UI Design', expertise: 85 },
    { title: 'Brand Design', expertise: 85 },
  ],
  socialLinks: [],
};

export default data;
