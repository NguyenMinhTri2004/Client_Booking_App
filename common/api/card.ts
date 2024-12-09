import queryString from 'query-string';

import { fetchApi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const getAllCard = (isCache: boolean = false) => {
  return fetchApi<any>(`/card/getById`, {}, METHOD.GET, {}, isCache);
};


export const createCard = (isCache: boolean = false, payload: any) => {
    return fetchApi<any>(`/card/create`, payload, METHOD.POST, {}, isCache);
};


export const deleteCard = (isCache: boolean = false, payload: any) => {
    return fetchApi<any>(`/card/delete`, payload, METHOD.POST, {}, isCache);
};
