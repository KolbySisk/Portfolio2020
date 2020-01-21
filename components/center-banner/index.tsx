import * as CenterBannerStyles from './center-banner.styles';
import { Color } from '../../styles';

const CenterBanner = ({ children, backgroundColor }: Props) => {
  return (
    <CenterBannerStyles.Root backgroundColor={backgroundColor}>
      <CenterBannerStyles.ContentContainer>{children}</CenterBannerStyles.ContentContainer>
    </CenterBannerStyles.Root>
  );
};

interface Props {
  children: any;
  backgroundColor?: Color;
}

export default CenterBanner;
