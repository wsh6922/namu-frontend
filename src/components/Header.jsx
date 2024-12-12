// import React from "react";
import { useAuthStore } from '../stores/store';
import { Link } from 'react-router-dom';

const Header = () => {

    const { isLogin, setIsLogin } = useAuthStore();

    return (
    <div id="top_navbar" className="navbar flexd-top" style={{transform: 'translateY(0px)'}}>
        <div className="top-navbar-content">
            <div className="nav-button-left-bar">
                <button id="dark-mode" className="nav-button">
                    <i className="icon-brightness-contrast"></i>
                </button>
            </div>
            <div className="search-bar">
                <input id="searchbar-input" type="text" placeholder="입력하세요"></input>
            </div>
            <div className="nav-button-right-bar">
                { isLogin ? (
                    <>  
                        <button type="button" className="nav-button-items">
                            Sign out
                        </button>
                        <Link to="/Writer">
                            <button type="button" className="nav-button-items">
                                Writing
                            </button>
                        </Link>
                    </>
                ) : (   
                    <Link to="/Login">
                        <button type="button" className="nav-button-items">
                            Sign in
                        </button>
                    </Link>
                )}
            </div>
        </div>
    </div>
    )
};

export default Header;