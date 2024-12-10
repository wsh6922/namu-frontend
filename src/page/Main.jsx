import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Main = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main
            id="main"
            className={`content layout-main ${isVisible ? 'reveal-animation' : ''}`}
            role="main"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
                transition: 'all 1s ease-out'
            }}
        >
            <article id="article" className="page-of_mb6" role="article">
                <header>
                    <h1 className="main-page-title">기억보단 기록을, 기록보단 성장을</h1>
                    <div className="hr pb0"></div>
                </header>
                <p>
                    배움에서 그치지 않고 학습한 지식을 <strong>Github</strong>와 <strong>기술 블로그</strong>를
                    통해 체계적으로 <strong>기록</strong>하고 <strong>공유</strong>하고 있습니다.<br/>
                </p>
                <hr />
                <p className="main-line">
                    안녕하세요! 백엔드 개발자 김남욱입니다.<br/>
                    꾸준한 기록의 <strong>가치</strong>를 믿으며, 지속적으로 성장하고자 합니다.<br/>
                    저에 대한 자세한 내용은 <Link to="/Resume"><strong>이력서</strong></Link>와 <a href="https://github.com/Thenamu"><strong>포트폴리오</strong></a>에서 확인하실 수 있습니다!
                </p>
            </article>
        </main>
    );
};

export default Main;