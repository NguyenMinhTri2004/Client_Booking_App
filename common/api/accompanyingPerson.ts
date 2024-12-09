import queryString from 'query-string';

import { fetchApi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const getAllAccompanyingPerson = (isCache: boolean = false) => {
  return fetchApi<any>(`/accompanyingPerson/getById`, {}, METHOD.GET, {}, isCache);
};


export const createAccompanyingPerson = (isCache: boolean = false, payload: any) => {
  return fetchApi<any>(`/accompanyingPerson/create`, payload, METHOD.POST, {}, isCache);
};


export const deleteAccompanyingPerson = (isCache: boolean = false, payload: any) => {
    return fetchApi<any>(`accompanyingPerson/delete`, payload, METHOD.POST, {}, isCache);
};
