// import React from "react";

const Main = () => {
    return (
        <main id = "main" className = "content layout" role = "main">
            <nav id="breadcrumbs">
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <span>/</span>
                        <span>Development</span>
                    </li>
                </ul>
            </nav>
            <article id="article" className="content-page">
                <header>
                    <h1 className="content-page-title">Development</h1>
                    <p className="Description">Test</p>
                </header>
            </article>
        </main>
    );
};

export default Main;