import React from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../components/pageTransition';

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

export default MyApp;
