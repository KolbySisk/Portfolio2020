import { AnimatePresence } from 'framer-motion';
import * as WorkBannerStyles from './work-banner.styles';

const WorkBanner = ({ work }: Props) => {
  return (
    <AnimatePresence>
      <WorkBannerStyles.Work
        color={work.color}
        patternPath={work.patternPath}
        initial={{ backgroundPositionX: '0px' }}
        animate={{ backgroundPositionX: '-5000px' }}
        exit={{}}
        transition={{
          loop: Infinity,
          ease: 'linear',
          duration: 100,
        }}>
        <WorkBannerStyles.Title>{work.title}</WorkBannerStyles.Title>
      </WorkBannerStyles.Work>
    </AnimatePresence>
  );
};

interface Props {
  work: any;
}

export default WorkBanner;
