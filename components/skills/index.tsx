import * as SkillsStyles from './skills.styles';
import { Skill, Skills } from '../../data/skills';
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

const SkillsComponent = ({ skills }: Props) => {
  const containerRef = useRef(null);
  const speed = 7000;
  const delay = 1000;

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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  if (process.browser) {
    const startScrolling = ({ ref, x, y }) => {
      const containerElement = ref?.current;
      const maxScrollWidth = containerElement.scrollWidth - containerElement.offsetWidth;
      let px = Math.ceil((maxScrollWidth / speed) * 10);

      let autoScrollingPaused = false;

      const autoScrollingInterval = setInterval(() => {
        if (autoScrollingPaused) return;

        var scrollPercentage =
          (100 * containerElement.scrollLeft) /
          (containerElement.scrollWidth - containerElement.clientWidth);

        if (scrollPercentage >= 100) {
          px = px * -px;
          autoScrollingPaused = true;

          setTimeout(() => {
            autoScrollingPaused = false;
          }, delay);
        }
        if (scrollPercentage <= 0) {
          px = Math.abs(px);
          autoScrollingPaused = true;

          setTimeout(() => {
            autoScrollingPaused = false;
          }, delay);
        }

        containerElement.scrollTo(
          x ? containerElement.scrollLeft + px : undefined,
          y ? containerElement.scrollLeft + px : undefined
        );
      }, 10);

      containerElement.addEventListener(
        'mouseenter',
        event => {
          autoScrollingPaused = true;
        },
        false
      );

      containerElement.addEventListener(
        'mouseleave',
        event => {
          autoScrollingPaused = false;
        },
        false
      );
    };

    setTimeout(() => {
      startScrolling({ ref: containerRef, x: true, y: false });
    }, delay);
  }
  return (
    <SkillsStyles.Root>
      <SkillsStyles.Title>Skills</SkillsStyles.Title>
      <AnimatePresence>
        <SkillsStyles.Skills
          ref={containerRef}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="hidden">
          {Object.values(skills).map((skill: Skill) => (
            <SkillsStyles.Skill key={skill.title} skill={skill} variants={item}>
              <div>
                <SkillsStyles.SkillTitle className="skill-title">
                  {skill.title}
                </SkillsStyles.SkillTitle>
                <picture>
                  <source
                    srcSet={require(`../../public/images/tech-logos/${skill.imageName}?webp`)}
                    type="image/webp"
                  />
                  <img src={require(`../../public/images/tech-logos/${skill.imageName}`)} />
                </picture>
              </div>
            </SkillsStyles.Skill>
          ))}
        </SkillsStyles.Skills>
      </AnimatePresence>
    </SkillsStyles.Root>
  );
};
interface Props {
  skills: Skills;
}
export default SkillsComponent;
