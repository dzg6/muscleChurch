/**
 *
 * Asynchronously loads the component for Login
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Members = lazyLoad(
  () => import('./index'),
  module => module.Members,
);
