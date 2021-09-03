import styled from '@emotion/styled';
import { spaced, Color, TitleFont } from '../../styles';
import { motion } from 'framer-motion';

export const Link: any = styled(motion.a)((props: any) => {
  const bgImage = require(`../../public/images/${props.patternPath}?webp`);
  return [
    TitleFont,
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: spaced(30),
      backgroundColor: props.backgroundColor ? props.backgroundColor : Color.black,
      flex: 1,
      minHeight: spaced(16),
      textShadow: `0 2px 2px rgba(0,0,0,.4), 0 2px 30px rgba(0,0,0,.2)`,
      letterSpacing: '1px',
      backgroundImage: `url(${bgImage})`,
      fontSize: 32,
    },
  ];
});
