import { useState, useEffect } from 'react';

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
                <h2>
                    Test
                </h2>
                <p>
                    Test
                </p>
                <hr/>
                <p>
                    Test
                </p>
            </article>
        </main>
    );
};

export default Main;