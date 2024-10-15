const Development = () => {
    return (
        <main id="development-main" className="content-main" role="main">
            <nav id="breadcrumbs" className="screen-only">
                <ul>
                    <li><a>home</a></li>
                    <li>
                        <span> / </span>
                        <span>development</span>
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
                                        <img style={{opacity: 0}}/>
                                    </a>
                                </div>
                            </a>
                            <h3>
                                <a></a>
                            </h3>
                            <a/>
                        </article>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default Development;