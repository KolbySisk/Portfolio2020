import Link from 'next/link';
import * as WorkLinkStyles from './work-link.styles';
import { AnimatePresence } from 'framer-motion';

const WorkLink = ({ work }: Props) => {
  return (
    <Link href={`/work/[slug]`} as={`/work/${work.slug}`} key={work.slug}>
      <AnimatePresence>
        <WorkLinkStyles.Work
          color={work.color}
          patternPath={work.patternName || 'work/eraise/pattern.png'}
          animate={{ backgroundPositionX: -20000 }}
          exit={{}}
          transition={{
            loop: Infinity,
            ease: 'linear',
            duration: 1000,
          }}>
          {work.title}
        </WorkLinkStyles.Work>
      </AnimatePresence>
    </Link>
  );
};

interface Props {
  work: any;
}

export default WorkLink;
