/**
 *
 * Asynchronously loads the component for StopWatch
 *
 */

import { lazyLoad } from 'utils/loadable';

export const StopWatch = lazyLoad(
  () => import('./index'),
  module => module.StopWatch,
);
