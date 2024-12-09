import queryString from 'query-string';

import { fetchApi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const signIn = (isCache: boolean = false, payload: any) => {
  return fetchApi<any>(`/user/newUserByEmail`, payload, METHOD.POST, {}, isCache);
};

export const signUp = (isCache: boolean = false, payload: any) => {
  return fetchApi<any>(`/signup`, payload, METHOD.POST, {}, isCache);
};

export const checkEmailToken = (isCache: boolean = false, token: string) => {
  return fetchApi<any>(`/user/checkLoginEmailToken?${queryString.stringify({ token})}`, {}, METHOD.GET, {}, isCache);
};
