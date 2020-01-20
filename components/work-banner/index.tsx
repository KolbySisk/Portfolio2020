import * as WorkBannerStyles from './work-banner.styles';

const WorkBanner = ({ work }: Props) => {
  return (
    <WorkBannerStyles.Work color={work.color}>
      <WorkBannerStyles.Title>{work.title}</WorkBannerStyles.Title>
    </WorkBannerStyles.Work>
  );
};

interface Props {
  work: any;
}

export default WorkBanner;
