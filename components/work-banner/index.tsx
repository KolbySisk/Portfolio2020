import * as WorkBannerStyles from './work-banner.styles';
import { useRef } from 'react';

const WorkBanner = ({ work }: Props) => {
  return (
    <WorkBannerStyles.Work
      color={work.color}
      patternPath={work.patternName || 'work/eraise/pattern.png'}
      animate={{ backgroundPositionX: '-100%' }}
      exit={{}}
      transition={{
        loop: Infinity,
        ease: 'linear',
        duration: 10,
      }}>
      <WorkBannerStyles.Title>{work.title}</WorkBannerStyles.Title>
    </WorkBannerStyles.Work>
  );
};

interface Props {
  work: any;
}

export default WorkBanner;
