import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as ScrollingSkillsStyles from './scrolling-skills.styles';
import { Skill } from '../../data/skills';
import SkillCard from '../skill-card';

const ScrollingSkills = ({ skills }: Props) => {
  const containerRef = useRef(null);
  const speed = 7000;
  const delay = 1500;

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

  if (process.browser) {
    const startScrolling = ({ ref, x, y }) => {
      const containerElement = ref?.current;
      const maxScrollWidth = containerElement.scrollWidth - containerElement.offsetWidth;
      const scrollSpeed = Math.ceil((maxScrollWidth / speed) * 10);
      let autoScrollingPaused = false;

      const autoScrollingInterval = setInterval(() => {
        if (autoScrollingPaused) return;

        // scrolls linearly in right and/or down at the given scrollSpeed
        containerElement.scrollTo(
          x ? containerElement.scrollLeft + scrollSpeed : undefined,
          y ? containerElement.scrollLeft + scrollSpeed : undefined
        );

        // Get 0-100 percent container has scrolled
        let scrollPercentage =
          (100 * containerElement.scrollLeft) /
          (containerElement.scrollWidth - containerElement.clientWidth);

        // Check if scrolling reached the end and stop autoScrollingInterval
        if (scrollPercentage >= 99.9) {
          clearInterval(autoScrollingInterval);
        }
      }, 10);

      /**
       * Stops autoScrolling while hovering on container
       */
      containerElement.addEventListener(
        'mouseenter',
        () => {
          autoScrollingPaused = true;
        },
        false
      );

      containerElement.addEventListener(
        'mouseleave',
        () => {
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
    <AnimatePresence>
      <ScrollingSkillsStyles.Skills
        ref={containerRef}
        variants={container}
        initial="hidden"
        animate="visible"
        exit="hidden">
        {skills.map((skill: Skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
      </ScrollingSkillsStyles.Skills>
    </AnimatePresence>
  );
};

interface Props {
  skills: Skill[];
}

export default ScrollingSkills;
