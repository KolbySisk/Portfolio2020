import { useEffect } from 'react';

export const useTitle = (title: string) => {
  if (process.browser) {
    useEffect(() => {
      document.title = `Kolby Sisk - ${title}`;
    }, []);
  }
};
