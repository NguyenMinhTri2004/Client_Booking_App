import queryString from 'query-string';

import { fetchStrapi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const getAll = (isCache: boolean = false) => {
  return fetchStrapi<any>(`/settings?populate=*`, {} , METHOD.GET, {}, isCache);
};

// export const signUp = (isCache: boolean = false, payload: any) => {
//   return fetchApi<any>(`/signup`, payload, METHOD.POST, {}, isCache);
// };

// export const checkEmailToken = (isCache: boolean = false, token: string) => {
//   return fetchApi<any>(`/user/checkLoginEmailToken?${queryString.stringify({ token})}`, {}, METHOD.GET, {}, isCache);
// };
