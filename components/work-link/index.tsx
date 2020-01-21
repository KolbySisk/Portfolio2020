import Link from 'next/link';
import * as WorkLinkStyles from './work-link.styles';
import { AnimatePresence } from 'framer-motion';

const WorkLink = ({ work }: Props) => {
  return (
    <AnimatePresence>
      <Link href={`/work/[slug]`} as={`/work/${work.slug}`} key={work.slug}>
        <WorkLinkStyles.Work
          color={work.color}
          patternPath={work.patternName || 'work/eraise/pattern.png'}
          initial={{ backgroundPositionX: '0px' }}
          animate={{ backgroundPositionX: '-5000px' }}
          exit={{}}
          transition={{
            loop: Infinity,
            ease: 'linear',
            duration: 100,
          }}>
          {work.title}
        </WorkLinkStyles.Work>
      </Link>
    </AnimatePresence>
  );
};

interface Props {
  work: any;
}

export default WorkLink;
