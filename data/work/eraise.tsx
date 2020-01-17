import { Color } from '../../styles';
import { AllSkills } from '../skills';

export const Eraise = {
  title: 'Eraise',
  slug: 'eraise',
  tags: ['Project'],
  color: Color.red,
  skills: [AllSkills.node],
  about:
    'Eraise is a passion project that I worked on in my spare time over the course of 6 months. I challenged myself to create a tool that could be used to help people struggling with student loan debt. The solution I came up with is a platform where users could receive donations that would be sent directly to their loan provider. Donators can choose to donate - once or monthly - to a random user, or explore the community and donate to a specific user.',
  challenge:
    'Design and build an automated, secure, optimized, and scalable app along with the supporting company infrastructure. Research and roll a stack with the most effect technologies available in the given ecosystem. Learn new and exciting technologies while exercising design skills.',
  result:
    'In six months I finished the app and all the supporting tasks. I started by designing the brand, wireframing, and then designing in parallel with coding the app. I rolled a powerful stack that was a lot of fun to work with. The stack included Next.js with Emotion and Redux for the frontend, and Typescript Node using Express and Objection.js along with postgreSQL for the backend. While architecting the infrastructure I utilized a number of useful resources to solve specific problems including Stripe, Plaid, Firebase Authentication, and Heroku to name a few.',
  topics: [
    {
      title: 'Branding',
      description: 'Did some cool branding.',
      imageName: '',
    },
    {
      title: 'Wireframes',
      description: 'Did some cool branding.',
      imageName: '',
    },
  ],
};
