/**
*
* Asynchronously loads the component for EditMember
*
*/

import { lazyLoad } from 'utils/loadable';

export const EditMember = lazyLoad(() => import('./index'), module => module.EditMember);