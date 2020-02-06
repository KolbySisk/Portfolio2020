import Data from '../data';

export const useWork = (title: string) => {
  const work = Data.work.find(d => d.slug === title);
  const nextWork = Data.work[Data.work.indexOf(work) + 1] || Data.work[0];

  return { work, nextWork };
};
