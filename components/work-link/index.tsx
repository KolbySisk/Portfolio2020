import Link from 'next/link';
import * as WorkLinkStyles from './work-link.styles';

const WorkLink = ({ work }: Props) => {
  return (
    <Link href={`/work/[slug]`} as={`/work/${work.slug}`} key={work.slug}>
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
    </Link>
  );
};

interface Props {
  work: any;
}

export default WorkLink;
