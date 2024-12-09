import queryString from 'query-string';

import { fetchApi } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';


export const getallRoomTypeBySlug = (isCache: boolean = false, slug: string) => {
    return fetchApi<any>(`/roomType/get?${queryString.stringify({slug})}`, {}, METHOD.GET, {}, isCache);
};

export const getDetailRoomType = (isCache: boolean = false, slug: object) => {
  console.log("getDetailRoomType", {...slug})
  return fetchApi<any>(`/roomType/getDetail?${queryString.stringify({...slug})}`, {}, METHOD.GET, {}, isCache);
};



