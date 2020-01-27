import styled from '@emotion/styled';
import { Constant, TitleFont, spaced } from '../../styles';
import { motion } from 'framer-motion';

export const Work: any = styled(motion.a)((props: any) => {
  const bgImage = require(`../../public/images/${props.patternPath}?webp`);

  return [
    TitleFont,
    {
      width: '100%',
      height: spaced(22),
      fontSize: '36px',
      lineHeight: '40px',
      display: 'flex',
      alignItems: 'center',
      padding: `0 ${spaced(4)}px`,
      backgroundColor: props.color,
      textShadow: `0 2px 2px rgba(0,0,0,.6), 0 2px 30px rgba(0,0,0,.4)`,
      letterSpacing: '1px',
      backgroundImage: `url(${bgImage})`,
      backgroundBlendMode: 'soft-light',
      ':hover': {
        backgroundBlendMode: 'unset',
      },
    },
  ];
});
