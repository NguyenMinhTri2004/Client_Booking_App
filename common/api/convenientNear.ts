import queryString from 'query-string';

import { fetchApi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const getallConvenientTypeNear = (isCache: boolean = false) => {
  return fetchApi<any>(`/convenientNearType/getAll`, {}, METHOD.GET, {}, isCache);
};

export const getAllConvenientNear = (isCache: boolean = false) => {
    return fetchApi<any>(`/convenientNear/getAll`, {}, METHOD.GET, {}, isCache);
};


