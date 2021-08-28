import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import { AnimatePresence } from 'framer-motion';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    );
  }
}

// Google analytics event
Router.events.on('routeChangeComplete', (url) => {
  // @ts-ignore
  window.gtag('config', 'UA-156696606-1', {
    page_path: url,
  });
});

export default MyApp;
