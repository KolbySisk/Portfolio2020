import * as SkillsBannerStyles from './skills-banner.styles';
import { Skill } from '../../data/skills';
import { AnimatePresence } from 'framer-motion';
import SkillCard from '../skill-card';

const SkillsBanner = ({ skills }: Props) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <AnimatePresence>
      <SkillsBannerStyles.Container>
        <SkillsBannerStyles.Skills
          variants={container}
          initial="hidden"
          animate="visible"
          exit="hidden">
          {skills.map((skill: Skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </SkillsBannerStyles.Skills>
      </SkillsBannerStyles.Container>
    </AnimatePresence>
  );
};

interface Props {
  skills: Skill[];
}

export default SkillsBanner;
