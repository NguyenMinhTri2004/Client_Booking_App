import queryString from 'query-string';

import { fetchApi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const getProfile = (isCache: boolean = false) => {
  return fetchApi<any>(`/user/getById`, {}, METHOD.GET, {}, isCache);
};


export const updateProfile = (isCache: boolean = false, payload: any) => {
    return fetchApi<any>(`/user/update`, payload, METHOD.POST, {}, isCache);
};

export const deleteProfile = (isCache: boolean = false) => {
    return fetchApi<any>(`/user/delete`, {}, METHOD.POST, {}, isCache);
};

export const resetPassword = (isCache: boolean = false, payload: any) => {
  return fetchApi<any>(`/user/reset-password`, payload, METHOD.POST, {}, isCache);
};

export const checkResetPasswordEmailToken = (isCache: boolean = false, token: string) => {
  return fetchApi<any>(`/user/checkResetPasswordToken?${queryString.stringify({ token})}`, {}, METHOD.GET, {}, isCache);
};
