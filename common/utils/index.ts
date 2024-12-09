import { AxiosResponse } from 'axios';
import { flattenDeep } from 'lodash';
import moment from 'moment';

// 
// import { ContractToken, ContractTokenEthers } from '@/common/services/token';
import request from '@/common/utils/fetch';
import requestContext from '@/common/utils/fetchStrapi';
import requestELS from '@/common/utils/fetchELS';
import { CacheManager } from './cacheStorage';
import { NULL_ADDRESS } from './constants';

// import { ethers } from "ethers";

export interface ApiResponse<T> {
  metadata(metadata: any): unknown;
  success: string;
  message: string;
  data: T;
}


interface ErrorResponse {
  response?: {
    data?: string;
  };
}

export const handleApi = async (func: any, speadData = true): Promise<{ success: boolean; data?: any; error?: any }> => {
  if (!func) return { success: false };
  try {
    const data = await func
    console.log("Data fetch api" , data)
    if (!speadData) {
      return { success: true, data };
    }
    return { success: true, ...data.data };
  } catch (error : any) {
    console.log("Error" , error)
    // if(error && error?.response && error?.response.data){}
    const dataError = error?.response?.data ;
    return { success: false, error: dataError };
  }
};

export const fetchApi = async <T>(
  endPoint = '',
  data: any = null,
  method = 'get',
  headers = {},
  isCache = false
): Promise<AxiosResponse<ApiResponse<T>, any>> => {
  const body = {
    method: method,
    headers: {
      // 'Content-Type': 'application/json',
      ...headers,
    },
    data: data,
  };

  // handleCache
  const keyCache = `$api_${endPoint}_${JSON.stringify(body)}`;
  if (isCache) {
    const { result, wait } = await CacheManager.wait<AxiosResponse<ApiResponse<T>, any>>(keyCache);
    if (result) return result;
    if (wait) {
      const data = await CacheManager.get<AxiosResponse<ApiResponse<T>, any>>(keyCache);
      return data;
    }
  }

  const response = await request(endPoint, body);

  if (isCache) {
    CacheManager.set<AxiosResponse<ApiResponse<T>, any>>(keyCache, response, 300000);
  }

  return response;
};

export const fetchStrapi = async <T>(
  endPoint = '',
  data: any = null,
  method = 'get',
  headers = {},
  isCache = false
): Promise<AxiosResponse<ApiResponse<T>, any>> => {
  const body = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    data: data,
  };

  // handleCache
  const keyCache = `$api_${endPoint}_${JSON.stringify(body)}`;
  if (isCache) {
    const { result, wait } = await CacheManager.wait<AxiosResponse<ApiResponse<T>, any>>(keyCache);
    if (result) return result;
    if (wait) {
      const data = await CacheManager.get<AxiosResponse<ApiResponse<T>, any>>(keyCache);
      return data;
    }
  }

  const response = await requestContext (endPoint, body);

  if (isCache) {
    CacheManager.set<AxiosResponse<ApiResponse<T>, any>>(keyCache, response, 300000);
  }

  return response;
};


export const fetchELS = async <T>(
  endPoint = '',
  data: any = null,
  method = 'get',
  headers = {},
  isCache = false
): Promise<AxiosResponse<ApiResponse<T>, any>> => {
  const body = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    data: data,
  };

  // handleCache
  const keyCache = `$api_${endPoint}_${JSON.stringify(body)}`;
  if (isCache) {
    const { result, wait } = await CacheManager.wait<AxiosResponse<ApiResponse<T>, any>>(keyCache);
    if (result) return result;
    if (wait) {
      const data = await CacheManager.get<AxiosResponse<ApiResponse<T>, any>>(keyCache);
      return data;
    }
  }

  const response = await requestELS (endPoint, body);

  if (isCache) {
    CacheManager.set<AxiosResponse<ApiResponse<T>, any>>(keyCache, response, 300000);
  }

  return response;
};

export const smartTrim = (string: string, maxLength: number) => {
  if (!string) return '';
  if (maxLength < 1) return string;
  if (string.length <= maxLength) return string;
  if (maxLength === 1) return `${string.substring(0, 1)}...`;

  const midpoint = Math.ceil(string.length / 2);
  const toremove = string.length - maxLength;
  const lstrip = Math.ceil(toremove / 2);
  const rstrip = toremove - lstrip;
  return `${string.substring(0, midpoint - lstrip)}...${string.substring(midpoint + rstrip)}`;
};

export const smartTrimCurrency = (string: string, maxLength: number) => {
  if (!string) return '';
  if (maxLength < 1) return string;
  if (string.length <= maxLength) return string;
  if (maxLength === 1) return `${string.substring(0, 1)}...`;

  const arrString = string.split('.');
  const rightDot = smartTrim(arrString[1], maxLength);
  return `${arrString[0]}${rightDot.length > 0 ? '.' + rightDot : ''}`;
};

// export const parseEther = (value: string, fixed: number = 2) => {
//   if (value === null || value === undefined) {
//     return value;
//   }
//   const balanceInWei = (+value).toLocaleString('fullwide', {
//     useGrouping: false,
//   });
//   const etherNum = Web3.utils.fromWei(balanceInWei, 'ether');
//   return (+etherNum).toFixed(fixed);
// };

export const formatShortNumber = (num: number, fix: number = 2) => {
  if (typeof num !== 'number') {
    return num;
  }

  if (num > 1e19) {
    return num.toString();
  }

  if (num < -1e19) {
    return num.toString();
  }

  if (Math.abs(num) < 1000) {
    return num.toFixed(fix);
  }

  let shortNumber;
  let exponent = 0;
  let size = 0;
  const sign = num < 0 ? '-' : '';
  const suffixes = {
    K: 6,
    M: 9,
    B: 12,
    T: 16,
  } as { [key: string]: number };

  num = Math.abs(num);
  size = Math.floor(num).toString().length;

  exponent = size % 3 === 0 ? size - 3 : size - (size % 3);
  shortNumber = Math.round(10 * (num / Math.pow(10, exponent))) / 10;
  shortNumber = shortNumber.toFixed(fix);

  for (const suffix in suffixes) {
    if (exponent < suffixes[suffix]) {
      shortNumber += suffix;
      break;
    }
  }

  return sign + shortNumber;
};

export const formatDate = (date: Date) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};


export const calculateDateDifference = (dateStart:string, dateEnd:string):number => {
  const start = new Date(dateStart);
  const end = new Date(dateEnd);
  const diffInTime = end.getTime() - start.getTime();
  const diffInDays = diffInTime / (1000 * 3600 * 24);
  return diffInDays;
}


export const formatDecimalNumber = (num: any, dec: any) => {
  return num.toLocaleString(undefined, { minimumFractionDigits: dec, maximumFractionDigits: dec });
};

export function longAddress(address: string) {
  return address.substring(0, 8) + '...' + address.substring(address.length - 12, address.length);
}

export const formatNumber = (number: string | number) => {
  return new Intl.NumberFormat().format(+number);
};

export const getTotalPage = (totalItem: number, itemPerPage: number): number => {
  return Math.ceil(totalItem / itemPerPage);
};

export const sliceItemsByPage = (itemList: any[], currentPage: number, itemPerPage: number) => {
  if (!itemList) return [];
  return itemList.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);
};

export const formatCurrency = (amount: number | string) => {
  return amount.toString().replace(/(\,)(\d+)$/g, '.$2').replace(/(\d)(?=(\d{3})+\b)/g, '$1,');
};

export const isValidURL = (value: string) => {
  const res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return res !== null;
};

export const shortenAddress = (address: string, number = -4) => {
  if (address) {
    const first = address.slice(0, 4);
    const last = address.slice(number);
    return `${first}...${last}`;
  }
  return;
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getBase64Image = (url: string) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if(ctx){
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL();
        resolve(dataURL);
      }
     
    };
    img.src = url;
  });
};
export const getFileFromURL = (url: string) => {
  return new Promise((resolve) => {
    let blob = null;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      blob = xhr.response;
      resolve(blob);
    };
    xhr.send();
  });
};

export const fixedEncodeURIComponent = (str: string) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
};

export const SymbolChainMapping = {
  '0x4': 'ETH',
  '0x61': 'BNB',
  '0x13881': 'MATIC',
  '0x1': 'ETH',
  '0x38': 'BNB',
  '0x89': 'MATIC',
} as any;

export const NameChainMapping = {
  '0x4': 'Rinkeby',
  '0x61': 'BNB Smart Chain',
  '0x13881': 'Polygon',
  '0x1': 'Ethereum',
  '0x38': 'BNB Smart Chain',
  '0x89': 'Polygon',
} as any;

export const tokenPriceToWei = async (price: string | number, token_address: string, wrap_token_address: string) => {
  if (typeof price !== 'string') {
    price = price.toString();
  }

  // handleCache
  const keyCache = `$tokenPriceToWei_${price}_${token_address}`;
  const { result, wait } = await CacheManager.wait<string>(keyCache);
  if (result) return result;
  if (wait) {
    const data = await CacheManager.get<string>(keyCache);
    return data;
  }

  let tokenTemp = token_address;
  if (token_address === NULL_ADDRESS) {
    tokenTemp = wrap_token_address;
  }
//   const contractToken = new ContractToken(tokenTemp);
//   const decimals = await contractToken.getDecimals();
//   const tokenDecimals = parseInt(decimals);
//   const resultWei = parseFloat(price) * Math.pow(10, tokenDecimals);

  // setCache
//   CacheManager.set<string>(keyCache, resultWei.toString(), 300000);

//   return resultWei.toString();
};

export const tokenPriceFromWei = async (price: string | number, token_address: string, wrap_token_address: string) => {
  if (typeof price !== 'string') {
    price = price.toString();
  }

  // handleCache
  const keyCache = `$tokenPriceFromWei_${price}_${token_address}`;
  const { result, wait } = await CacheManager.wait<string>(keyCache);
  if (result) return result;
  if (wait) {
    const data = await CacheManager.get<string>(keyCache);
    return data;
  }

  let tokenTemp = token_address;
  if (token_address === NULL_ADDRESS) {
    tokenTemp = wrap_token_address;
  }
//   const contractToken = new ContractToken(tokenTemp);
//   const decimals = await contractToken.getDecimals();
//   const tokenDecimals = parseInt(decimals);
//   const resultFormated = parseFloat(price) / Math.pow(10, tokenDecimals);

  // setCache
//   CacheManager.set<string>(keyCache, resultFormated.toString(), 300000);

//   return resultFormated.toString();
};

export const tokenPriceToWeiEthers = async (price: string | number, token_address: string, rpc_url: string, wrap_token_address: string) => {
  if (typeof price !== 'string') {
    price = price.toString();
  }

  // handleCache
  const keyCache = `$tokenPriceToWeiEthers_${price}_${token_address}`;
  const { result, wait } = await CacheManager.wait<string>(keyCache);
  if (result) return result;
  if (wait) {
    const data = await CacheManager.get<string>(keyCache);
    return data;
  }

  let tokenTemp = token_address;
  if (token_address === NULL_ADDRESS) {
    tokenTemp = wrap_token_address;
  }
//   const contractToken = new ContractTokenEthers(tokenTemp, rpc_url);
//   const decimals = await contractToken.getDecimals();
//   const tokenDecimals = parseInt(decimals);
//   const resultWei = parseFloat(price) * Math.pow(10, tokenDecimals);

//   // setCache
//   CacheManager.set<string>(keyCache, resultWei.toString(), 300000);

//   return resultWei.toString();
};

// export const tokenPriceFromWeiEthers = async (
//   price: string | number,
//   token_address: string,
//   rpc_url: string,
//   wrap_token_address: string
// ) => {
//   if (typeof price !== 'string') {
//     price = price.toString();
//   }

//   // handleCache
//   const keyCache = `$tokenPriceFromWeiEthers_${price}_${token_address}`;
//   const { result, wait } = await CacheManager.wait<string>(keyCache);
//   if (result) return result;
//   if (wait) {
//     const data = await CacheManager.get<string>(keyCache);
//     return data;
//   }

//   let tokenTemp = token_address;
//   if (token_address === NULL_ADDRESS) {
//     tokenTemp = wrap_token_address;
//   }
//   const contractToken = new ContractTokenEthers(tokenTemp, rpc_url);
//   const decimals = await contractToken.getDecimals();
//   const tokenDecimals = parseInt(decimals);
//   const resultFormated = parseFloat(price) / Math.pow(10, tokenDecimals);

//   // setCache
//   CacheManager.set<string>(keyCache, resultFormated.toString(), 300000);

//   return resultFormated.toString();
// };

export const getParamFromURL = (key: string) => {
  const url = new URL(window.location.href);
  return url.searchParams.get(key);
};

export const setParamFromURL = (key: string, value: string) => {
  const query = insertParam(key, value);
  window.history.replaceState("", "", `?${query}`);
};

export const insertParam = (key: string, value: string) => {
  key = encodeURI(key);
  value = encodeURI(value);

  const kvp = document.location.search.substr(1).split('&');

  let i = kvp.length;
  let x;
  while (i--) {
    x = kvp[i].split('=');

    if (x[0] === key) {
      x[1] = value;
      kvp[i] = x.join('=');
      break;
    }
  }

  if (i < 0) {
    kvp[kvp.length] = [key, value].join('=');
  }

  if (kvp.length === 2 && !kvp[0]) {
    return kvp[1];
  }

  return kvp.join('&');
};

// export function updateQueryStringParameter(uri: string, key: string, value: string) {
//   if (!value) return uri;

//   const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
//   const separator = uri.indexOf('?') !== -1 ? '&' : '?';
//   if (uri.match(re)) {
//     return uri.replace(re, '$1' + key + '=' + value + '$2');
//   } else {
//     return uri + separator + key + '=' + value;
//   }
// }

// export const getChainId = async () => {
//   const web3 = new Web3(Web3.givenProvider);
//   const chainId = await web3.eth.getChainId();

//   return `0x${chainId}`;
// };

// export function getEthersProviderByChain(chainId: string) {
//   const chainMapping = {
//     '0x1': 'https://rpc.ankr.com/eth',
//     '0x4': 'https://rpc.ankr.com/eth_rinkeby',
//     '0x89': 'https://rpc.ankr.com/polygon',
//     '0x13881': 'https://rpc.ankr.com/polygon_mumbai',
//     '0x38': 'https://rpc.ankr.com/bsc',
//     '0x61': 'https://rpc.ankr.com/bsc_testnet_chapel',
//   } as any;
//   const url = chainMapping[chainId];
//   const provider = new ethers.providers.JsonRpcProvider(url);
//   return provider;
// }

export function getExponentialParts(num: number | string | Array<any>): string[] {
  return Array.isArray(num) ? num : String(num).split(/[eE]/);
}

export function isExponential(num: number | string | Array<any>) {
  const eParts = getExponentialParts(num);
  return !Number.isNaN(Number(eParts[1]));
}

export function fromExponential(num: number | string | Array<any>): string {
  const eParts = getExponentialParts(num);
  if (!isExponential(eParts)) {
    return eParts[0];
  }

  const sign = eParts[0][0] === '-' ? '-' : '';
  const digits = eParts[0].replace(/^-/, '');
  const digitsParts = digits.split('.');
  const wholeDigits = digitsParts[0];
  const fractionDigits = digitsParts[1] || '';
  let e = Number(eParts[1]);

  if (e === 0) {
    return `${sign + wholeDigits}.${fractionDigits}`;
  } else if (e < 0) {
    // move dot to the left
    const countWholeAfterTransform = wholeDigits.length + e;
    if (countWholeAfterTransform > 0) {
      // transform whole to fraction
      const wholeDigitsAfterTransform = wholeDigits.substr(0, countWholeAfterTransform);
      const wholeDigitsTransformedToFraction = wholeDigits.substr(countWholeAfterTransform);
      return `${sign + wholeDigitsAfterTransform}.${wholeDigitsTransformedToFraction}${fractionDigits}`;
    } else {
      // not enough whole digits: prepend with fractional zeros

      // first e goes to dotted zero
      let zeros = '0.';
      e = countWholeAfterTransform;
      while (e) {
        zeros += '0';
        e += 1;
      }
      return sign + zeros + wholeDigits + fractionDigits;
    }
  } else {
    // move dot to the right
    const countFractionAfterTransform = fractionDigits.length - e;
    if (countFractionAfterTransform > 0) {
      // transform fraction to whole
      // countTransformedFractionToWhole = e
      const fractionDigitsAfterTransform = fractionDigits.substring(e);
      const fractionDigitsTransformedToWhole = fractionDigits.substring(0, e);
      return `${sign + wholeDigits + fractionDigitsTransformedToWhole}.${fractionDigitsAfterTransform}`;
    } else {
      // not enough fractions: append whole zeros
      let zerosCount = -countFractionAfterTransform;
      let zeros = '';
      while (zerosCount) {
        zeros += '0';
        zerosCount -= 1;
      }
      return sign + wholeDigits + fractionDigits + zeros;
    }
  }
}

export function getFileInfo(file: File, mime: string = ''): { filename: string; mime: string } {
  const pos: number = String(file.name).lastIndexOf('.');

  if (mime === 'image/jpeg') {
    const filename = `${String(file.name).substring(0, pos < 0 ? String(file.name).length : pos)}.jpg`;

    return {
      filename,
      mime: 'image/jpeg',
    };
  }

  return {
    filename: file.name,
    mime: file.type,
  };
}

// export const checkMetamaskInstalled = (): boolean => {
//   const installed = window.ethereum && window.ethereum.isMetaMask;
//   //TODO: Show modal install if metamask not found
//   return installed;
// };

export function generateDecreasePalette(primaryColor: string, length: number = 10) {
  const baseColor = primaryColor.replace(/^#/, '');

  let r = parseInt(baseColor.substring(0, 2), 16);
  let g = parseInt(baseColor.substring(2, 4), 16);
  let b = parseInt(baseColor.substring(4, 6), 16);

  const palette = [];

  for (let i = 0; i < length; i++) {
    r = Math.floor(r * 0.8);
    g = Math.floor(g * 0.8);
    b = Math.floor(b * 0.8);

    const hexColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

    palette.push(hexColor);
  }

  return palette;
}

export function generateIncreasePalette(primaryColor: string, length: number = 10) {
  const baseColor = primaryColor.replace(/^#/, '');

  let r = parseInt(baseColor.substring(0, 2), 16);
  let g = parseInt(baseColor.substring(2, 4), 16);
  let b = parseInt(baseColor.substring(4, 6), 16);

  const palette = [];

  for (let i = 0; i < 10; i++) {
    r = Math.min(Math.floor(r / 0.8), 255);
    g = Math.min(Math.floor(g / 0.8), 255);
    b = Math.min(Math.floor(b / 0.8), 255);

    const hexColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

    palette.push(hexColor);
  }

  return palette;
}

export function generateDecreaseOpacityPalette(primaryColor: string, length: number = 10, secondaryColor: string = '#A4A4A4') {
  const baseColor = secondaryColor.replace(/^#/, '');

  const r = parseInt(baseColor.substring(0, 2), 16);
  const g = parseInt(baseColor.substring(2, 4), 16);
  const b = parseInt(baseColor.substring(4, 6), 16);

  const palette = [];

  palette.push(primaryColor);
  for (let i = 1; i < length; i++) {
    const alpha = 1 - (i * 1.2) / length;

    const rgbaColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;

    palette.push(rgbaColor);
  }

  return palette;
}

export const calculateTimeInvest = (
  amount: number,
  interest: number,
  start: Date | number,
  end: Date | number,
  monthNameFormat: string = 'MMMM YYYY'
) => {
  const startDate = moment(start).add(1, 'days');
  const endDate = moment(end).subtract(1, 'days');

  const monthsInRange = [] as {
    monthName: string;
    daysInRange: string[];
    totalAmount: number;
    sfAmount: number;
    breathsAmount: number;
    operationFee: number;
    rndFee: number;
    avaiToClaim?: boolean;
  }[];

  if (startDate.month() === endDate.month()) {
    const startMonthName = startDate.clone().startOf('month').format(monthNameFormat);
    const sameMonthInRange = [] as string[];
    const currentDate = moment(startDate);

    while (currentDate.isSameOrBefore(endDate, 'day')) {
      sameMonthInRange.push(currentDate.format('YYYY-MM-DD'));
      currentDate.add(1, 'day');
    }
    monthsInRange.push({
      monthName: startMonthName,
      daysInRange: sameMonthInRange,
      totalAmount: ((sameMonthInRange.length * amount) / startDate.daysInMonth()) * interest,
      sfAmount: ((sameMonthInRange.length * amount) / startDate.daysInMonth()) * interest * 0.75,
      breathsAmount: ((sameMonthInRange.length * amount) / startDate.daysInMonth()) * interest * 0.1 * 1000,
      operationFee: ((sameMonthInRange.length * amount) / startDate.daysInMonth()) * interest * 0.1,
      rndFee: ((sameMonthInRange.length * amount) / startDate.daysInMonth()) * interest * 0.05,
    });

    return monthsInRange;
  }

  // Calculate the start and end months
  const startMonth = moment(startDate).startOf('month');
  const endMonth = moment(endDate).startOf('month');

  // Get the start month days
  const startMonthName = startMonth.format(monthNameFormat);
  const startOfMonth = moment.max(startMonth, startDate);
  const endOfMonth = startOfMonth.clone().endOf('month');
  const startDaysInRange = [];
  let currentDate = moment(startOfMonth);

  while (currentDate.isSameOrBefore(endOfMonth, 'day')) {
    startDaysInRange.push(currentDate.format('YYYY-MM-DD'));
    currentDate.add(1, 'day');
  }

  monthsInRange.push({
    monthName: startMonthName,
    daysInRange: startDaysInRange,
    totalAmount: ((startDaysInRange.length * amount) / startMonth.daysInMonth()) * interest,
    sfAmount: ((startDaysInRange.length * amount) / startMonth.daysInMonth()) * interest * 0.75,
    breathsAmount: ((startDaysInRange.length * amount) / startMonth.daysInMonth()) * interest * 0.1 * 1000,
    operationFee: ((startDaysInRange.length * amount) / startMonth.daysInMonth()) * interest * 0.1,
    rndFee: ((startDaysInRange.length * amount) / startMonth.daysInMonth()) * interest * 0.05,
  });

  // Get the end month days
  const endMonthName = endMonth.format(monthNameFormat);
  const startOfEndMonth = moment.min(endMonth, endDate).startOf('month');
  const endOfMonthEnd = endDate.clone();
  const endDaysInRange = [];
  currentDate = moment(startOfEndMonth);
  while (currentDate.isSameOrBefore(endOfMonthEnd, 'day')) {
    endDaysInRange.push(currentDate.format('YYYY-MM-DD'));
    currentDate.add(1, 'day');
  }

  // Get the full months in between
  const currentMonth = moment(startOfMonth).add(1, 'month').startOf('month');
  while (currentMonth.isBefore(startOfEndMonth)) {
    const monthName = currentMonth.format(monthNameFormat);
    const startOfMonth = currentMonth.clone().startOf('month');
    const endOfMonth = currentMonth.clone().endOf('month');
    const daysInRange = [];
    currentDate = moment(startOfMonth);
    while (currentDate.isSameOrBefore(endOfMonth, 'day')) {
      daysInRange.push(currentDate.format('YYYY-MM-DD'));
      currentDate.add(1, 'day');
    }
    monthsInRange.push({
      monthName,
      daysInRange: [...daysInRange],
      totalAmount: ((daysInRange.length * amount) / currentMonth.daysInMonth()) * interest,
      sfAmount: ((daysInRange.length * amount) / currentMonth.daysInMonth()) * interest * 0.75,
      breathsAmount: ((daysInRange.length * amount) / currentMonth.daysInMonth()) * interest * 0.1 * 1000,
      operationFee: ((daysInRange.length * amount) / currentMonth.daysInMonth()) * interest * 0.1,
      rndFee: ((daysInRange.length * amount) / currentMonth.daysInMonth()) * interest * 0.05,
    });
    currentMonth.add(1, 'month');
  }
  monthsInRange.push({
    monthName: endMonthName,
    daysInRange: endDaysInRange,
    totalAmount: ((endDaysInRange.length * amount) / endMonth.daysInMonth()) * interest,
    sfAmount: ((endDaysInRange.length * amount) / endMonth.daysInMonth()) * interest * 0.75,
    breathsAmount: ((endDaysInRange.length * amount) / endMonth.daysInMonth()) * interest * 0.1 * 1000,
    operationFee: ((endDaysInRange.length * amount) / endMonth.daysInMonth()) * interest * 0.1,
    rndFee: ((endDaysInRange.length * amount) / endMonth.daysInMonth()) * interest * 0.05,
    avaiToClaim: false,
  });
  monthsInRange.map((data) => {
    if (moment(data.monthName).endOf('month').add(14, 'days').isSameOrBefore(end)) {
      data.avaiToClaim = true;
    } else {
      data.avaiToClaim = false;
    }
    return data;
  });

  return monthsInRange;
};

export const calculateAffiliateList = (investmentResponses: any, packageResponses: any, referralRule: any, dateNow: Date | number) => {
  let sfWillReceiveBalance = 0;
  const calculateInvestmentList = [];
  const sfAffiliateList = [];
  for (let i = 0; i < investmentResponses.length; i++) {
    const amountPkg = packageResponses[investmentResponses[i].packageId].amount;
    const interestPkg = packageResponses[investmentResponses[i].packageId].interest;
    const interestAff = (interestPkg * 10 * referralRule?.inDirectCom) / 10;
    const calculateInvestments = calculateTimeInvest(amountPkg, interestAff, investmentResponses[i].investTime, dateNow, 'YYYY.MM.DD');
    calculateInvestments.forEach((calculateInvestment) => {
      sfAffiliateList.push(calculateInvestment);
      sfWillReceiveBalance += calculateInvestment.totalAmount;
    });
    calculateInvestmentList.push(calculateInvestments);
  }
  const results = [] as any[];
  flattenDeep(calculateInvestmentList).reduce(function (res: any, value) {
    if (!res[value.monthName]) {
      res[value.monthName] = { monthName: value.monthName, totalAmount: 0, avaiToClaim: value.avaiToClaim };
      results.push(res[value.monthName]);
    }
    res[value.monthName].totalAmount += value.totalAmount;
    if (res[value.monthName].avaiToClaim == true && value.avaiToClaim == false) {
      res[value.monthName].avaiToClaim = value.avaiToClaim;
    }
    return res;
  }, {});

  return results;
};

export function numberWithCommas(x: string) {
  const parts = x.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

function buildNode(data: any, node: any) {
  const children = data.filter(
    (child: any) =>
      child.nodePos.x >= node.nodePos.x * 3 && child.nodePos.x <= node.nodePos.x * 3 + 2 && child.nodePos.y === node.nodePos.y + 1
  );
  if (children.length === 0) {
    node.children = [];
  } else {
    node.children = children.map((child: any) => buildNode(data, child));
  }
  return node;
}

export function buildTree(data: any) {
  if (data?.length <= 0) return [];

  data.sort((a: any, b: any) => a.nodePos.x - b.nodePos.x || a.nodePos.y - b.nodePos.y);
  const rootNode = data[0];
  const tree = buildNode(data, rootNode);

  return tree;
}

export function createTree(inputArray: any) {
  if (inputArray.length === 0) {
    return [];
  }

  const outputTree = [];
  let currentParent = null;

  for (const item of inputArray) {
    const newNode = { ...item, children: [] };

    if (currentParent) {
      currentParent.children.push(newNode);
    } else {
      outputTree.push(newNode);
    }

    currentParent = newNode;
  }

  return outputTree;
}

export function findParent(node: any) {
  if (node.y === 0 && node.x === 0) {
    return null;
  }
  const xParent = Math.floor(node.x / 3);
  const yParent = node.y - 1;
  return { x: xParent, y: yParent };
}

export function setCookie(name: string, value: string, days?: number) {
  let cookieString = `${name}=${value}; path=/`;

  if (days !== undefined) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    cookieString += `; ${expires}`;
  }

  document.cookie = cookieString;
}


export const removeUndefinedValues = (obj:Object) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value !== undefined)
  );
};



export const GetCardType = (number:any) =>
{
    // visa
    var re = new RegExp("^4");
    if (number.match(re) != null)
        return "Visa";

    // Mastercard 
    // Updated for Mastercard 2017 BINs expansion
     if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) 
        return "Mastercard";

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
        return "AMEX";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
        return "Discover";

    // Diners
    re = new RegExp("^36");
    if (number.match(re) != null)
        return "Diners";

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (number.match(re) != null)
        return "Diners - Carte Blanche";

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null)
        return "JCB";

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re) != null)
        return "Visa Electron";

    return "";
}


export const validateCreditCard = (value:any) => {
  if (!value) return false;
  
  // Loại bỏ các dấu cách hoặc dấu gạch nối
  const cardNumber = value.replace(/\D/g, '');
  
  let sum = 0;
  let shouldDouble = false;

  // Kiểm tra số thẻ từ phải sang trái
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // Số thẻ hợp lệ nếu tổng chia hết cho 10
  return sum % 10 === 0;
};

