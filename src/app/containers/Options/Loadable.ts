/**
 *
 * Asynchronously loads the component for Settings
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Options = lazyLoad(
  () => import('./index'),
  module => module.Options,
);
