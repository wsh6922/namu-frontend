const Development = () => {
    return (
        <main id="development-main" className="content-main" role="main">
            <nav id="breadcrumbs" className="screen-only">
                <ul>
                    <li><a>home</a></li>
                    <li>
                        <span>&nbsp;/&nbsp;</span>
                        <a>development</a>
                    </li>
                </ul>
            </nav>
            <article id="article" className="page-of_mb6" role="article">
                <header>
                    <h1 className="page-title">Development</h1>
                    <p className="note-sm">get to know the development</p>
                </header>
                <h2 id="year">2024</h2>
                <div className="columns">
                    <div className="columns-1-2">
                        <article className="project-card">
                            <a className="flip-project no-hover">
                                <div className="project-card-img">
                                    <a>
                                        <img sizes="(min-width:86em)27.5rem, (min-width:54em)24.5rem, (min-width:42em)21.5rem, 42rem"
                                            width="864"
                                            height="486"
                                            loading="lazy"
                                            style={{ opacity: 0 }} />
                                    </a>
                                </div>
                            </a>
                            <h3 className = "project-card-title">
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

export default Development;