// import React from 'react';

const SideBar = () => {
    
    return (
        <header id="header">
            <div className="sidebar-sticky no-fouc" style={{opacity: "1"}}>
                <div className="sidebar-about">
                    <a className="sidebar-title">
                        <h2>Namu</h2>
                    </a>
                    <p/>
                    <p>너의 머리가 부족해서야</p>
                </div>
                <nav className="sidebar-nav" role="navigation">
                    <ul>
                        <li>
                            <div className="list-wrapper">
                                <a className="sidebar-nav-item">Development</a>
                            </div>
                        </li>
                        <li>
                            <div className="list-wrapper">
                                <a className="sidebar-nav-item">Study</a>
                            </div>
                        </li>
                        <li>
                            <div className="list-wrapper">
                                <a className="sidebar-nav-item">Resume</a>
                            </div>
                        </li>
                        <li>
                            <div className="list-wrapper">
                                <a className="sidebar-nav-item">Tags</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="sidebar-social">
                    <ul>
                        <li>
                            <a href="https://github.com/Thenamu" title="github" className="sidebar-social-icon">
                                <span className="icon-github"></span>
                            </a>
                        </li>
                        <li>
                            <a href="" title="instagram" className="sidebar-social-icon">
                                <span className="icon-instagram"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://wsh6922.tistory.com" title="blog" className="sidebar-social-icon">
                                <span className="icon-link"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.notion.so/3246d84a4b5949c0bd6c18005ee75557" title="notion" className="sidebar-social-icon">
                                <span className="icon-notion"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        
    );
};

export default SideBar;
