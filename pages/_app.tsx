import React from 'react';
import App from 'next/app';
import Router from 'next/router';
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

// Google analytics event
Router.events.on('routeChangeComplete', url => {
  // @ts-ignore
  window.gtag('config', 'UA-156696606-1', {
    page_path: url,
  });
});

export default MyApp;
