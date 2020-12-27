/**
 *
 * Asynchronously loads the component for Timer
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Timer = lazyLoad(
  () => import('./index'),
  module => module.Timer,
);
