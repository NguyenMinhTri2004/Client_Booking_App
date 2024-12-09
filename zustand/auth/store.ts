import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthState {
    loginMode : boolean
    userInfo : Object
    changeMode: (loading : boolean) => void
    addUserInfo: (data : Object) => void
}


// const initialState = {
//     loading : false,
//     changeMode : function
// }

export const useAuthStore = create<AuthState>()(
    devtools(
      persist(
        (set) => ({
          loginMode: false,
          userInfo: {},

          changeMode: (loginMode: boolean) => set((state) => ({
            ...state,
            loginMode,
          })),

          addUserInfo: (userInfo: Object) => set((state) => ({
            ...state,
            userInfo,
          })),
        }),
        {
          name: 'auth-store',
        }
      )
    )
);