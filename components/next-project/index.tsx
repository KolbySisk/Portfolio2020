import * as NextProjectStyles from './next-project.styles';
import Link from 'next/link';

const NextProject = ({ work }: Props) => {
  return (
    <Link href={`/work/[slug]`} as={`/work/${work.slug}`}>
      <NextProjectStyles.Link
        backgroundColor={work.color}
        patternPath={work.patternPath}
        initial={{ backgroundPositionX: '0px' }}
        animate={{ backgroundPositionX: '-5000px' }}
        exit={{}}
        transition={{
          loop: Infinity,
          ease: 'linear',
          duration: 100,
        }}>
        {work.title}
      </NextProjectStyles.Link>
    </Link>
  );
};

interface Props {
  work: any;
}

export default NextProject;
