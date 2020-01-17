import { AnimatePresence, motion } from 'framer-motion';
import * as PageTransitionStyles from './pageTransition.styles';

const PageTransition = ({ children }: Props) => {
  return (
    <PageTransitionStyles.Root>
      {children}

      <PageTransitionStyles.Overlay
        initial={{ transform: 'translateY(-292px)' }}
        animate={{ transform: 'translateY(916px)' }}
        exit={{ transform: 'translateY(-292px)' }}
        transition={{ duration: 1, ease: [0.25, 0.8, 0.6, 1] }}>
        <PageTransitionStyles.Trees />
        <PageTransitionStyles.Background />
      </PageTransitionStyles.Overlay>
    </PageTransitionStyles.Root>
  );
};

interface Props {
  children: any;
}

export default PageTransition;
