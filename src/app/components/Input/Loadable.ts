/**
 *
 * Asynchronously loads the component for Input
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Input = lazyLoad(
  () => import('./index'),
  module => module.Input,
);
