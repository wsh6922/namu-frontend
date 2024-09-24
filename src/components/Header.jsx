// import React from 'react';

const Header = () => {
    
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
                <div></div>
            </div>
        </header>
        
    );
};

export default Header;
