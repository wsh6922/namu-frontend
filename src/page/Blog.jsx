import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
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
                        <a>Blog</a>
                    </li>
                </ul>
            </nav>
            <article id="article" className="page-of_mb6" role="article">
                <header>
                    <h1 className="page-title">Blog</h1>
                    <p className="note-sm">get to know the Blog</p>
                </header>
                <h2 id="year">2024</h2>
                <div className="columns">
                    <div className="columns-1-2">
                        <article className="project-card">
                            <Link to="/Content" className="flip-project no-hover">
                                <div className="project-card-img">
                                    <a>
                                        <img 
                                            sizes="(min-width:86em)27.5rem, (min-width:54em)24.5rem, (min-width:42em)21.5rem, 42rem"
                                            width="864"
                                            height="486"
                                            loading="lazy"
                                            style={{ opacity: 0 }} 
                                        />
                                    </a>
                                </div>
                            </Link>
                            <h3 className="project-card-title">
                                <a>Test</a>
                            </h3>
                            <a className="fill-card" tabIndex="-1"></a>
                        </article>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default Blog;