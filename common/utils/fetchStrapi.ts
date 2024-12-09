import axios from 'axios';

import { APP_TOKEN_KEY } from '@/common/utils/constants';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_STRAPI_URL,
});

instance.interceptors.request.use(
  function (config) {
    if (config.headers) {
    //   const token = window.localStorage.getItem(APP_TOKEN_KEY);
      config.headers['Authorization'] = `Bearer 54c2b9895a238306f0f9dd4e41291fc7e0225cfedbe90d9bd1343dbbdf8242647d4c19dc5d7b0d53e3b62a2b8a5ded064eaedd7ed38ea9cf0bb85f8d852239fbb3b4a808faea63527279fea0a6bdb4c69e37c91d41edfa5d481eba9aa0060fb762a25d367ccae81d85c9daccedbaca27eeeb41a497d1ebb6335218674c8e80a3`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
    //   localStorage.removeItem('user');
    //   localStorage.removeItem(APP_TOKEN_KEY);
      window.location.reload();
      return;
    }
    return Promise.reject(error);
  }
);

export default instance;
