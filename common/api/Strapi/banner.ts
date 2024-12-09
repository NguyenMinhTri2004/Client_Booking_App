import queryString from 'query-string';

import { fetchStrapi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';

export const getAllBanner = (isCache: boolean = false) => {
  return fetchStrapi<any>(`/banners?populate=*`, {} , METHOD.GET, {}, isCache);
};
