// import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    
    return (
        <header id="header">
            <div className="sidebar-sticky no-fouc" style={{opacity: "1"}}>
                <div className="sidebar-about">
                    <Link to="/" className="sidebar-title">
                        <h2>Namu</h2>
                    </Link>
                    <p/>
                    <p>너의 머리가 부족해서야</p>
                </div>
                <nav className="sidebar-nav" role="navigation">
                    <ul>
                        <li>
                            <div className="list-wrapper">
                                <Link to ="/Blog" className="sidebar-nav-item">Blog</Link>
                            </div>
                        </li>
                        <li>
                            <div className="list-wrapper">
                                <Link to ="/Books" className="sidebar-nav-item">Books</Link>
                            </div>
                        </li>
                        <li>
                            <div className="list-wrapper">
                                <Link to="/Resume" className="sidebar-nav-item">Resume</Link>
                            </div>
                        </li>
                        <li>
                            <div className="list-wrapper">
                                <Link to="/Releases" className="sidebar-nav-item">Releases</Link>
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
                            <a href="https://thenamu.notion.site" title="notion" className="sidebar-social-icon">
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
