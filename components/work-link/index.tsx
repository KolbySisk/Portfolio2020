import { useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import * as WorkLinkStyles from './work-link.styles';

const WorkLink = ({ work }: Props) => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  if (process.browser) {
    /**
     * Stops autoScrolling while hovering on container
     */

    setTimeout(() => {
      containerRef?.current?.addEventListener(
        'mouseenter',
        () => {
          controls.start({
            backgroundPositionX: '-5000px',
          });
        },
        false
      );

      containerRef?.current?.addEventListener(
        'mouseleave',
        () => {
          controls.stop();
        },
        false
      );
    });
  }

  return (
    <motion.div variants={item}>
      <AnimatePresence>
        <Link href={`/work/[slug]`} as={`/work/${work.slug}`} key={work.slug}>
          <WorkLinkStyles.Work
            ref={containerRef}
            color={work.color}
            patternPath={work.patternName || 'work/eraise/pattern.png'}
            animate={controls}
            initial={{ backgroundPositionX: '0px' }}
            exit={{}}
            transition={{
              loop: Infinity,
              duration: 200,
            }}>
            {work.title}
          </WorkLinkStyles.Work>
        </Link>
      </AnimatePresence>
    </motion.div>
  );
};

interface Props {
  work: any;
}

export default WorkLink;
