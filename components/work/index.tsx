import * as WorkStyles from './work.styles';
import { useState } from 'react';
import Tag from '../tag';

const Work = ({ work, tags }: Props) => {
  const [selectedTag, setSelectedTag] = useState();

  const getWorkByTag = () => {
    if (!selectedTag) return work;
    return work.filter(w => w.tags.includes(selectedTag));
  };

  return (
    <WorkStyles.Root>
      <WorkStyles.Header>
        <WorkStyles.Title>Work</WorkStyles.Title>
        <WorkStyles.Tags>
          {tags.map((tag: string) => (
            <Tag
              tagClicked={tag => setSelectedTag(tag === selectedTag ? undefined : tag)}
              key={tag}
              tag={tag}
              active={selectedTag === tag}
            />
          ))}
          {selectedTag && (
            <Tag tagClicked={() => setSelectedTag(undefined)} tag={`Show all work`} />
          )}
        </WorkStyles.Tags>
      </WorkStyles.Header>

      <WorkStyles.Works>
        {getWorkByTag().map((work: any) => (
          <WorkStyles.Work color={work.color} key={work.slug} href={`/work/${work.slug}`}>
            {work.title}
          </WorkStyles.Work>
        ))}
      </WorkStyles.Works>
    </WorkStyles.Root>
  );
};

interface Props {
  work: any[];
  tags: string[];
}

export default Work;
