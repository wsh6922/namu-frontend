import { useState, useEffect } from 'react';


const Development = () => {
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
                        <a>development</a>
                    </li>
                </ul>
            </nav>
            <article id="article" className="page-of_mb6" role="article">
                <header>
                    <h1 className="page-title">Development</h1>
                    <div className="post-date">
                        <span className="ellipsis">
                            <time dateTime="">Test</time>&nbsp;in&nbsp;
                            <a className="flip-title">Test</a>
                            <span></span>
                        </span>
                    </div>
                    <div>

                    </div>
                    <aside className="about" role="complementary">
                        <div className="author">
                            <h2 className="page-title hr-bottom">
                                About
                            </h2>
                            <p>
                                <strong>기억보단 기록을, 기록보단 성장을</strong><br />
                                배움에서 그치지 않고 학습한 지식을 <strong>Github</strong>와 <strong>기술 블로그</strong>를<br />
                                통해 체계적으로 <strong>기록</strong>하고 <strong>공유</strong>하고 있습니다.<br />
                                꾸준한 기록의 <strong>가치</strong>를 믿으며, 지속적으로 성장하고자 합니다.<br />
                                저에 대한 자세한 내용은 <strong><a href="">이력서</a></strong>와 <strong><a href="">포트폴리오</a></strong>에서 확인하실 수 있습니다!
                            </p>
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
                    </aside>
                </header>
            </article>
        </main>
    );
};

export default Development;