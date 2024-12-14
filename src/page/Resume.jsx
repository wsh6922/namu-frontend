import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Resume = ({ type }) => {
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
                    <li><Link to="/">home</Link></li>
                    <li>
                        <span>&nbsp;/&nbsp;</span>
                        <a>{type}</a>
                    </li>
                </ul>
            </nav>
            <article id="article" className="page-of_mb6" role="article">
                <header>
                    <h1 className="page-title Resume-title">김남욱</h1>
                    <p className="sub-title">기억보단 기록을, 기록보단 성장을</p>
                    <div className="hr pb0"></div>
                </header>
                <p className="note p-note">
                    안녕하세요! 백엔드 개발자 김남욱입니다. 웹 개발과 저에 대해서 작성하고 있습니다.<br/>
                    <br/>
                    배움에서 그치지 않고 학습한 지식을 <strong>GitHub</strong>와 <strong>기술 블로그</strong>를
                    통해 <strong>기록</strong>하고 <strong>공유</strong>하고 있습니다.<br/>
                    익숙하지 않은 분야에서도 적극적으로 탐구하며, 좋은 결과를 도출하기 위해 끊임없이 노력하고 있습니다.<br/>
                    동료들과의 피드백에서도 항상 겸손한 태도를 유지하려 노력하고 있습니다.<br/>
                    <br/>
                    꾸준한 기록의 <strong>힘</strong>과 지식 공유의 <strong>가치</strong>와 함께 성장할 수 있음을 믿습니다.<br/>
                </p>
                <div className="Resume-columns">
                    <dl className="Resume-column">
                        <dt className="faded">GitHub</dt>
                        <dd className="bold"><a href="https://github.com/Thenamu">https://github.com/Thenamu</a></dd>
                        <dt className="faded">Tistory</dt>
                        <dd className="bold"><a href="https://wsh6922.tistory.com/">https://wsh6922.tistory.com</a></dd>
                    </dl>
                </div>
                <div className="Resume_columns">
                    <div className="Resume_column layout-resume">
                        <section>
                            <div>
                                <h2>Experience & Project</h2>
                                <section>
                                    <header>
                                        <h3 className="faded">신구대학교 컴퓨터소프트웨어과</h3>
                                        <p className="mb24">신구대학교</p>
                                        <p className="Resume_note">
                                            <strong>Period</strong><br/>
                                            2022. 03. ~ 2025. 02.<br/>
                                            <br/>
                                            <strong>content</strong><br/>
                                            신구대학교 창업동아리 &apos;여가&apos; 팀장<br/>
                                            소도시 여행 서비스 플랫폼 &apos;여가&apos; 호텔 조회 API 개발
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                        </p>
                                    </header>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default Resume;