/**
 *
 * Asynchronously loads the component for Tracker
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Tracker = lazyLoad(
  () => import('./index'),
  module => module.Tracker,
);
