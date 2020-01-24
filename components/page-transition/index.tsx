import { useState, useEffect } from 'react';
import * as PageTransitionStyles from './page-transition.styles';

const PageTransition = ({ children }: Props) => {
  const [screenHeight, setScreenHeight] = useState(0);

  if (process.browser) {
    useEffect(() => {
      setScreenHeight(window.screen.height);
    }, [window.screen.height]);
  }

  return (
    <PageTransitionStyles.Root>
      {children}

      <PageTransitionStyles.Overlay
        initial={{ y: -292, display: 'flex' }}
        animate={{ y: screenHeight }}
        exit={{ y: -292 }}
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
