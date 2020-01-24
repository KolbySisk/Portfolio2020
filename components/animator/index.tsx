import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';
import CenterBanner from '../center-banner';
import ContentSquare from '../content-square';
import ImageSquare from '../image-square';
import { Color } from '../../styles';

export enum ContainerType {
  'ContentSquare' = 'ContentSquare',
  'ImageSquare' = 'ImageSquare',
  'CenterBanner' = 'CenterBanner',
}

const Animator = ({ children, containerType, backgroundColor }: Props) => {
  const variants = {
    visible: direction => {
      return {
        x: `0%`,
        y: `0%`,
        opacity: 1,
        transition: { delay: 0.2, type: 'spring', damping: 100, stiffness: 300 },
      };
    },
    invisible: direction => {
      return {
        x:
          direction === 'bottom'
            ? 0
            : direction === 'left'
            ? `calc(-100% - 200px)`
            : `calc(100% + 200px)`,
        y: direction === 'bottom' ? `calc(100% + 200px)` : 0,
        opacity: 0,
        transition: { delay: 0.2, type: 'spring', damping: 100, stiffness: 300 },
      };
    },
  };

  const getMotionContainer = isVisible => {
    if (containerType === 'ContentSquare') {
      return (
        <ContentSquare backgroundColor={backgroundColor}>
          <motion.div
            custom="left"
            initial="invisible"
            animate={isVisible ? 'visible' : 'invisible'}
            variants={variants}
            exit="invisible">
            {children}
          </motion.div>
        </ContentSquare>
      );
    }
    if (containerType === 'ImageSquare') {
      return (
        <ImageSquare backgroundColor={backgroundColor}>
          <motion.div
            custom="right"
            initial="invisible"
            animate={isVisible ? 'visible' : 'invisible'}
            variants={variants}
            exit="invisible">
            {children}
          </motion.div>
        </ImageSquare>
      );
    }
    if (containerType === 'CenterBanner') {
      return (
        <CenterBanner backgroundColor={backgroundColor}>
          <motion.div
            custom="bottom"
            initial="invisible"
            animate={isVisible ? 'visible' : 'invisible'}
            variants={variants}
            exit="invisible">
            {children}
          </motion.div>
        </CenterBanner>
      );
    } else {
      return (
        <motion.div
          custom="bottom"
          initial="invisible"
          animate={isVisible ? 'visible' : 'invisible'}
          variants={variants}
          exit="invisible">
          {children}
        </motion.div>
      );
    }
  };

  return (
    <VisibilitySensor partialVisibility={true} delayedCall={true}>
      {({ isVisible }) => getMotionContainer(isVisible)}
    </VisibilitySensor>
  );
};

interface Props {
  children: any;
  containerType?: ContainerType;
  backgroundColor?: Color;
}

export default Animator;
