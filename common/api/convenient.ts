import queryString from 'query-string';

import { fetchApi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const getallConvenientType = (isCache: boolean = false) => {
  return fetchApi<any>(`/convenientType/getAll`, {}, METHOD.GET, {}, isCache);
};

export const getAllConvenient = (isCache: boolean = false) => {
    return fetchApi<any>(`/convenient/getAll`, {}, METHOD.GET, {}, isCache);
};


