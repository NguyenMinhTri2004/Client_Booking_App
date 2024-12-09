import queryString from 'query-string';

import { fetchApi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const uploadAvatar = (isCache: boolean = false, payload: any) => {
  return fetchApi<any>(`/upload/user/avatar`, payload, METHOD.POST, {}, isCache);
};
