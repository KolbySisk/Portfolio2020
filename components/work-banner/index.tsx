import Link from 'next/link';
import * as WorkBannerStyles from './work-banner.styles';

const WorkBanner = ({ work }: Props) => {
  return <WorkBannerStyles.Work color={work.color}>{work.title}</WorkBannerStyles.Work>;
};

interface Props {
  work: any;
}

export default WorkBanner;
