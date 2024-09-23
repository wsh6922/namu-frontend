// import React from "react";

const Header = () => {
    
    return (
        <header id="header" role="banner">
            <nav className="navbar">
                <div className="container desktop_container">
                    <div className="content">
                        <div className="header-logo">
                            <a href="/">
                                <span style={{width: "110px", display: "inline-flex", justifyContent: "center", alignItems: "center"}}>namu</span>
                            </a>
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-menu-left">
                                <div className="is-hoverable category_menu_content--no-list-style navbar-item">
                                    <a href=" " className="navbar-item">
                                        <span>Development</span>
                                    </a>
                                </div>
                                <div className="is-hoverable category_menu_content--no-list-style navbar-item">
                                    <a href=" " className="navbar-item">
                                        <span>Resume</span>
                                    </a>
                                </div>
                                <div className="is-hoverable category_menu_content--no-list-style navbar-item">
                                    <a href=" " className="navbar-item">
                                        <span>Tags</span>
                                    </a>
                                </div>
                                <div className="is-hoverable category_menu_content--no-list-style navbar-item">
                                    <a href=" " className="navbar-item">
                                        <span>Books</span>
                                    </a>
                                </div>
                            </div>
                            <div className="navbar-menu-right">
                                <div className="search-bar navbar-item">
                                    <label className="visually-hidden" htmlFor="searchbar-input">통합검색</label>
                                    <input type="text" id="searchbar-input" className="input" placeholder="입력하세요."></input>
                                    <span className="search__icon">
                                        <i className="far icon-search"></i>
                                    </span>
                                </div>
                                <div className="navbar-item buttons">
                                    <button type="button" id="dark-mode" className="button space-inset-4">
                                        <span className="icon-brightness-contrast"></span>
                                    </button>
                                    <button type="button" className="sign-up space-inset-4 button">로그인</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
