import { useState, useEffect } from 'react';

const Releases = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main 
            id="development-main" 
            className={`content-main ${isVisible ? 'reveal-animation' : ''}`}
            role="main"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
                transition: 'all 1s ease-out'
            }}
        >
            <nav id="breadcrumbs" className="screen-only">
                <ul>
                    <li><a>home</a></li>
                    <li>
                        <span>&nbsp;/&nbsp;</span>
                        <a>Releases</a>
                    </li>
                </ul>
            </nav>
            <article id="article" className="page-of_mb6" role="article">
                <header>
                    <h1 className="page-title Releases-title">Releases</h1>
                    <p className="sub-title">v1.0.0</p>
                    <div className="hr pb0"></div>
                </header>
                <p className="R-note p-note">
                    This release focused on implementing the core features.<br />
                    It was a significant challenge, but now it&apos;s time to enhance and improve with additional features.<br />
                    <br />
                    <ul>
                        <li>Built a backend server using Spring</li>
                        <li>Used React as the frontend framework</li>
                        <li>Released a portfolio website</li>
                    </ul>
                </p>
            </article>
        </main>
    );
};

export default Releases;