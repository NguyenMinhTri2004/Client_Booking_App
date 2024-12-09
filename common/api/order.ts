import queryString from 'query-string';

import { fetchApi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const orderReview = (isCache: boolean = false, payload: any) => {
  return fetchApi<any>(`/order/orderReview`, payload, METHOD.POST, {}, isCache);
};

export const orderByUser = (isCache: boolean = false, payload: any) => {
  return fetchApi<any>(`/order/orderByUser`, payload, METHOD.POST, {}, isCache);
};



