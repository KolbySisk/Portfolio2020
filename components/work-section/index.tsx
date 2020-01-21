import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import * as WorkStyles from './work.styles';
import Tag from '../tag';
import WorkLink from '../work-link';
import { AnimatePresence } from 'framer-motion';

const Work = ({ work, tags }: Props) => {
  const [selectedTag, setSelectedTag] = useState();
  const [scrolled, setScrolled] = useState(false);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

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

      <AnimatePresence>
        <WorkStyles.Works
          onScroll={() => setScrolled(true)}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="hidden">
          {getWorkByTag().map((work: any) => (
            <WorkLink key={work.slug} work={work} />
          ))}
        </WorkStyles.Works>
      </AnimatePresence>

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
