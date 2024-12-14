import { useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '../stores/store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {

    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const { isLogin, setIsLogin } = useAuthStore();

    const axiosLogin = async (id, password) => {
        const response = await axios.post("/api/homepage/login", {
            id,
            password
        });

        return response;
    }

    const login = async (event) => {
        event.preventDefault();
        if(!id && !password) {
            console.log('아이디와 비밀번호를 모두 입력하세요.')
        } else {
            try {
                const response = await axiosLogin(id, password);
                if (response.status == 200) {
                    setIsLogin(true);
                    console.log('로그인 성공');
                    navigate("/");
                } 
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    }

    useEffect(() => {
        if (isLogin === true)
            navigate("/");
    }, []);

    return (
        <div className="login">
            <div className="login-gap"></div>
            <div className="login-mb">
                <h2 className="login-h2">로그인</h2>
            </div>
            <div className="login-form">
                <div className="login-id">
                    <label className="login-label">이메일</label>
                    <div className="login-wrapper">
                        <input className="login-input" placeholder="아이디" onChange={event => {setId(event.target.value)}} required></input>
                    </div>
                </div>
                <div className="login-password">
                    <div className="login-lh">
                        <label className="login-label">비밀번호</label>
                        <div className="login-wrapper">
                            <input className="login-input" placeholder="********" onChange={event => {setPassword(event.target.value)}} required></input>
                        </div>
                    </div>
                </div>
                <div></div>
                <button className="login-button" onClick={e => login(e)}>
                    <div className="login-button-inner">
                        <span className="login-span">가입하기</span>
                    </div>
                </button>
            </div>
        </div>
    )
}