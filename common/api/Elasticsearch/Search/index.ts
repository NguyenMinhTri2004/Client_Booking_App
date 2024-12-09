import queryString from 'query-string';

import { fetchELS } from '@/common/utils';
import { METHOD } from '@/common/utils/constants';

export const searchAccommodation = (isCache: boolean = false, payload: any) => {
    return fetchELS<any>(`/dbserver1.test.accommodation/_search`, payload, METHOD.POST, {}, isCache);
};

