import Data from '../data';

export const useWork = (slug: string) => {
  const work = Data.work.find((d) => d.slug === slug);

  const nextWork = Data.work[Data.work.indexOf(work) + 1] || Data.work[0];

  return { work, nextWork };
};
