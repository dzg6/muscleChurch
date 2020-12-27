/**
 *
 * Asynchronously loads the component for Select
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Select = lazyLoad(
  () => import('./index'),
  module => module.Select,
);
