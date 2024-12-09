import queryString from 'query-string';

import { fetchApi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const getListAccommodation = (isCache: boolean = false) => {
  return fetchApi<any>(`/accommodation/getAll`, {}, METHOD.GET, {}, isCache);
};

export const getAccommodationBySlug = (isCache: boolean = false, slug: string) => {
  return fetchApi<any>(`/accommodation/getBySlug?${queryString.stringify({ slug})}`, {}, METHOD.GET, {}, isCache);
};

export const getNearAccommodation = (isCache: boolean = false, slug: any) => {
  console.log("Slug" , slug)
  return fetchApi<any>(`/accommodation/accommodationNear?${queryString.stringify({slug})}`, {}, METHOD.GET, {}, isCache);
};


export const searchAccommodation = (isCache: boolean = false, slug: any) => {
  console.log("Slug" , slug)
  return fetchApi<any>(`/accommodation/search?${queryString.stringify({...slug})}`, {}, METHOD.GET, {}, isCache);
};

