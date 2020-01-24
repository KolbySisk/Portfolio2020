import VisibilitySensor from 'react-visibility-sensor';
import * as SkillsBannerStyles from './skills-banner.styles';
import { Skill } from '../../data/skills';
import { AnimatePresence } from 'framer-motion';
import SkillCard from '../skill-card';

const SkillsBanner = ({ skills }: Props) => {
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 1, scale: 0 },
  };

  return (
    <AnimatePresence>
      <VisibilitySensor partialVisibility={true} delayedCall={true}>
        {({ isVisible }) => (
          <SkillsBannerStyles.Container>
            <SkillsBannerStyles.Skills
              variants={variants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              exit="hidden">
              {skills.map((skill: Skill) => (
                <SkillCard key={skill.title} skill={skill} />
              ))}
            </SkillsBannerStyles.Skills>
          </SkillsBannerStyles.Container>
        )}
      </VisibilitySensor>
    </AnimatePresence>
  );
};

interface Props {
  skills: Skill[];
}

export default SkillsBanner;
