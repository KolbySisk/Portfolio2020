import { useMemo, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import * as WorkStyles from './work.styles';
import Tag from '../tag';
import WorkLink from '../work-link';
import { AnimatePresence } from 'framer-motion';

const Work = ({ work, tags }: Props) => {
  const [selectedTag, setSelectedTag] = useState();
  const [scrolled, setScrolled] = useState(false);
  const workFilteredByTag = useMemo(() => {
    return !selectedTag ? work : work.filter((w) => w.tags.includes(selectedTag));
  }, [selectedTag]);

  const containerAnimation = {
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

  return (
    <WorkStyles.Root>
      <WorkStyles.Header>
        <WorkStyles.Title>Work</WorkStyles.Title>
        <WorkStyles.Tags>
          {tags.map((tag: string) => (
            <Tag
              tagClicked={(tag) => setSelectedTag(tag === selectedTag ? undefined : tag)}
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
          onScroll={() => {
            if (!scrolled) setScrolled(true);
          }}
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden">
          {workFilteredByTag.map((work: any) => (
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
