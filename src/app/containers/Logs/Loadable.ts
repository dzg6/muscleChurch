/**
 *
 * Asynchronously loads the component for Logs
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Logs = lazyLoad(
  () => import('./index'),
  module => module.Logs,
);
