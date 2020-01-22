import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../components/page-transition';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <AnimatePresence exitBeforeEnter>
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    );
  }
}

export default withGA('UA-156696606-1', Router)(MyApp);
