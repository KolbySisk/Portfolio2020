import * as AllProjectsStyles from './all-projects.styles';
import { Color } from '../../styles';
import Link from 'next/link';

const AllProjects = () => {
  return (
    <Link href={`/`}>
      <AllProjectsStyles.Link>See all projects</AllProjectsStyles.Link>
    </Link>
  );
};

export default AllProjects;
