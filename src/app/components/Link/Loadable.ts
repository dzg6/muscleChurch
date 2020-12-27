/**
 *
 * Asynchronously loads the component for Link
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Link = lazyLoad(
  () => import('./index'),
  module => module.Link,
);
