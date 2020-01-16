import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import Tag from '../tag';
import * as WorkStyles from './work.styles';

const Work = ({ work, tags }: Props) => {
  const [selectedTag, setSelectedTag] = useState();
  const [scrolled, setScrolled] = useState(false);

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

      <WorkStyles.Works onScroll={() => setScrolled(true)}>
        {getWorkByTag().map((work: any) => (
          <Link href={`/work/[slug]`} as={`/work/${work.slug}`} key={work.slug}>
            <WorkStyles.Work color={work.color}>{work.title}</WorkStyles.Work>
          </Link>
        ))}
      </WorkStyles.Works>
      {!scrolled && (
        <WorkStyles.ScrollHint>
          <FaChevronDown />
        </WorkStyles.ScrollHint>
      )}
    </WorkStyles.Root>
  );
};

interface Props {
  work: any[];
  tags: string[];
}

export default Work;
