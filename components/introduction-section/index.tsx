import { FaLink } from 'react-icons/fa';
import * as IntroductionStyles from './introduction.styles';

const Introduction = ({ intro, socialLinks }: Props) => {
  return (
    <IntroductionStyles.Root>
      <IntroductionStyles.IntroContainer>
        <IntroductionStyles.Logo
          dangerouslySetInnerHTML={{
            __html: require('../../public/images/logo-white.svg?include&size=80'),
          }}
        />
        <IntroductionStyles.LogoText>Kolby Sisk</IntroductionStyles.LogoText>
        <IntroductionStyles.Intro>{intro}</IntroductionStyles.Intro>
        <IntroductionStyles.SocialLinks>
          {socialLinks.map(link => (
            <IntroductionStyles.SocialLink key={link.title} href={link.url} target="_blank">
              <FaLink style={{ fontSize: 12 }} /> {link.title}
            </IntroductionStyles.SocialLink>
          ))}
        </IntroductionStyles.SocialLinks>
      </IntroductionStyles.IntroContainer>
    </IntroductionStyles.Root>
  );
};

interface Props {
  intro: string;
  socialLinks: any[];
}

export default Introduction;
