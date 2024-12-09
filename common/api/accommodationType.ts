import queryString from 'query-string';

import { fetchApi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const getallAccommodationType = (isCache: boolean = false) => {
  return fetchApi<any>(`/accommodationType/getAll`, {}, METHOD.GET, {}, isCache);
};


