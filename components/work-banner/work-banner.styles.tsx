import styled from '@emotion/styled';
import { Constant, TitleFont, spaced } from '../../styles';

export const Work: any = styled.div((props: any) => {
  const bgImage = require(`../../public/images/${props.patternPath}?webp`);

  return [
    TitleFont,
    {
      width: '100%',
      height: spaced(36),
      fontSize: '36px',
      lineHeight: '40px',
      display: 'flex',
      alignItems: 'center',
      padding: `0 ${spaced(4)}px`,
      backgroundColor: props.color,
      textShadow: `0 2px 4px rgba(0,0,0,.5)`,
      textAlign: 'center',
      backgroundImage: `url(${bgImage})`,
    },
  ];
});

export const Title: any = styled.h1((props: any) => [
  TitleFont,
  {
    fontSize: '52px',
    textShadow: `0 2px 4px rgba(0,0,0,.5)`,
    textAlign: 'center',
    width: '100%',
  },
]);
