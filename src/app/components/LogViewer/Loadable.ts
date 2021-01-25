/**
 *
 * Asynchronously loads the component for LogViewer
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LogViewer = lazyLoad(
  () => import('./index'),
  module => module.LogViewer,
);
