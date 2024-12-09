import axios from 'axios';
import Cookies from 'js-cookie';
import { APP_TOKEN_KEY } from '@/common/utils/constants';
import { useAuthStore } from '@/zustand/auth/store';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});



instance.interceptors.request.use(
  
  function (config) {
    if (config.headers) {
      // const token = window.localStorage.getItem(APP_TOKEN_KEY);
      const accessToken = Cookies.get("accessToken")
  // const userInfo:any = useAuthStore(state => state?.userInfo)
  // const userId = userInfo?.userId
      const userId = Cookies.get("userId")
      config.headers['authorization'] = `Bearer ${accessToken}`;
      config.headers['x-client-id'] = userId;
      // config.headers['Content-Type'] = 'multipart/form-data'
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
