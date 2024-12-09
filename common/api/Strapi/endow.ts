import queryString from 'query-string';

import { fetchStrapi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';

export const getAllEndow = (isCache: boolean = false) => {
  return fetchStrapi<any>(`/endows?populate=*`, {} , METHOD.GET, {}, isCache);
};
