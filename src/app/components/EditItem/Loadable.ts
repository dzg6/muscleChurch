/**
 *
 * Asynchronously loads the component for EditItem
 *
 */

import { lazyLoad } from 'utils/loadable';

export const EditItem = lazyLoad(
  () => import('./index'),
  module => module.EditItem,
);
