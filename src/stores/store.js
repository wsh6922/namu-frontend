import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"

export const useAuthStore = create(
        persist(set => ({
            isLogin: false,
            setIsLogin: (value) => set({ isLogin: value}),
        }),
        {
            name: "IsLoginState",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export const useUserInfoStore = create(
    persist(set => ({
        userInfo: {
            id: null,
            userId: null,
            name: null 
        },
            setUserInfo: (value) => set((state) => ({
                userInfo: { ...state.userInfo, ...value },
            })),
        }),
        {
            name: "UserInfoState",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);