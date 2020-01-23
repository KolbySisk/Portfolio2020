import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as ScrollingSkillsStyles from './scrolling-skills.styles';
import { Skill } from '../../data/skills';
import SkillCard from '../skill-card';

const ScrollingSkills = ({ skills }: Props) => {
  const containerRef = useRef(null);
  const skillRows = [];

  const containerMotion = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const createSkillRows = () => {
    const numOfRows = 3;

    for (let i = 0; i < 3; i++) {
      const chunkLength = Math.ceil(skills.length / numOfRows);
      const chunkBegin = chunkLength * i;
      const chunkEnd = chunkLength * (i + 1);

      const row = skills.slice(chunkBegin, chunkEnd);

      skillRows.push(row);
    }
  };

  const startScrolling = ({ ref, x, y }) => {
    const speed = 3200;
    const containerElement = ref?.current;
    const maxScrollWidth = containerElement?.scrollWidth - containerElement?.offsetWidth;
    const scrollSpeed = Math.ceil((maxScrollWidth / speed) * 10);
    let autoScrollingPaused = false;

    const autoScrollingInterval = setInterval(() => {
      if (autoScrollingPaused) return;

      // scrolls linearly right and/or down at the given scrollSpeed
      containerElement?.scrollTo(
        x ? containerElement?.scrollLeft + scrollSpeed : undefined,
        y ? containerElement?.scrollLeft + scrollSpeed : undefined
      );

      // Get percent container has scrolled
      let scrollPercentage =
        (100 * containerElement?.scrollLeft) /
        (containerElement?.scrollWidth - containerElement?.clientWidth);

      // Check if scrolling reached the end and stop autoScrollingInterval
      if (scrollPercentage >= 99.9) {
        clearInterval(autoScrollingInterval);
      }
    }, 10);

    /**
     * Stops autoScrolling while hovering on container
     */
    containerElement?.addEventListener(
      'mouseenter',
      () => {
        autoScrollingPaused = true;
      },
      false
    );

    containerElement?.addEventListener(
      'mouseleave',
      () => {
        autoScrollingPaused = false;
      },
      false
    );
  };

  if (process.browser) {
    createSkillRows();

    setTimeout(() => {
      startScrolling({ ref: containerRef, x: true, y: false });
    }, 1500);
  }

  return (
    <AnimatePresence>
      <ScrollingSkillsStyles.Skills ref={containerRef}>
        {skillRows.map((skillRow, i) => (
          <ScrollingSkillsStyles.SkillRow
            key={i}
            variants={containerMotion}
            initial="hidden"
            animate="visible"
            exit="hidden">
            {skillRow.map((skill: Skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </ScrollingSkillsStyles.SkillRow>
        ))}
      </ScrollingSkillsStyles.Skills>
    </AnimatePresence>
  );
};

interface Props {
  skills: Skill[];
}

export default ScrollingSkills;
