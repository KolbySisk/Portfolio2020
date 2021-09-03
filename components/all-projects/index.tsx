import * as AllProjectsStyles from './all-projects.styles';
import Link from 'next/link';
import { FaBackward } from 'react-icons/fa';
import { spaced } from '../../styles';

const AllProjects = () => {
  return (
    <Link href={`/`}>
      <AllProjectsStyles.Link>
        <FaBackward />
        <div style={{ width: spaced(2) }} />
        See all projects
      </AllProjectsStyles.Link>
    </Link>
  );
};

export default AllProjects;
