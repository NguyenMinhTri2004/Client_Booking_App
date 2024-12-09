import moment from 'moment';

/**
 * @param {string} dateA - a date, represented in string format
 * @param {string} dateB - a date, represented in string format
 */
export const dateSort = (a: any, b: any) => moment(a.createdDate).diff(moment(b.createdDate));
