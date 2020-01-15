import * as WorkStyles from './work.styles';
import { Skill } from '../../data';
import Tag from '../tag';

const Work = ({ work, tags }: Props) => {
  return (
    <WorkStyles.Root>
      <WorkStyles.Header>
        <WorkStyles.Title>Work</WorkStyles.Title>

        <WorkStyles.Tags>
          {tags.map((tag: string) => (
            <Tag tag={tag} />
          ))}
        </WorkStyles.Tags>
      </WorkStyles.Header>

      <WorkStyles.Works>
        {work.map((work: any) => (
          <WorkStyles.Work>{work.title}</WorkStyles.Work>
        ))}
      </WorkStyles.Works>
    </WorkStyles.Root>
  );
};

interface Props {
  work: Skill[];
  tags: string[];
}

export default Work;
