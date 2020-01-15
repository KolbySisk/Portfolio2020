import * as IntroductionStyles from './introduction.styles';

const Introduction = ({ intro }: Props) => {
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
      </IntroductionStyles.IntroContainer>
    </IntroductionStyles.Root>
  );
};

interface Props {
  intro: string;
}

export default Introduction;
