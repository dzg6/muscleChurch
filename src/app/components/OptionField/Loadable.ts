/**
*
* Asynchronously loads the component for Options
*
*/

import { lazyLoad } from 'utils/loadable';

export const OptionField = lazyLoad(() => import('./index'), module => module.OptionField);