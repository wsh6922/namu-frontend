import axios from "axios";
import { useEffect } from "react";
import { useAuthStore, useUserInfoStore } from "../stores/store";
import { useLocation } from "react-router-dom";

export default function UserProfileLoader () {

    const { isLogin, setIsLogin } = useAuthStore();
    const { userInfo, setUserInfo } = useUserInfoStore();
    const location = useLocation();

    const unAuthenticate = () => {
        setIsLogin(false);
        setUserInfo({ id: null, userId: null, name: null })
    };

    const axiosUserProfile = async () => {
        try {
            const response = await axios.get('/api/user/session');
            return response
        } catch (error) {
            console.error(error);
            throw error;
        }
    }


    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axiosUserProfile();
                if (response.data.data !== false) {
                    setIsLogin(true);
                    console.log(isLogin);
                    const { id, userId, name } = response.data.data;
                    console.log(id, userId, name);
                    setUserInfo({ id, userId, name });
                    console.log(userInfo);
                } else {
                    console.log('login yet');
                    unAuthenticate();
                }
            } catch (error) {
                console.error(error);
                unAuthenticate();
            }
        }
        fetchUserProfile();
    }, [location.pathname])
}