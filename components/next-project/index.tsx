import * as NextProjectStyles from './next-project.styles';
import { Color } from '../../styles';
import Link from 'next/link';

const NextProject = ({ work }: Props) => {
  return (
    <Link href={`/work/[slug]`} as={`/work/${work.slug}`}>
      <NextProjectStyles.Link backgroundColor={work.color}>{work.title}</NextProjectStyles.Link>
    </Link>
  );
};

interface Props {
  work: any;
}

export default NextProject;
