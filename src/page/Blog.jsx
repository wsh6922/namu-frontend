import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = ({ type, id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [posts, setPost] = useState([]);

    const axiosBlogPost = async (id) => {
        const response = await axios.get("/api/post/read", {
            params: { id }
        });

        return response;
    }

    const fetchPosts = async (id) => {
        try {
            const response = await axiosBlogPost(id);
            if (response.status == 200) {
                setPost(response.data.data);
                console.log(posts);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    useEffect(() => {
        fetchPosts(id);
    }, [id])

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
                    <h1 className="page-title">{type}</h1>
                    <p className="note-sm">get to know the {type}</p>
                </header>
                <h2 id="year">2024</h2>
                <div className="columns">
                    {posts.map(post => (
                    <div className="columns-1-2" key={post.id}>
                        <article className="project-card">
                            <Link to={`/Content/${post.id}`} className="flip-project no-hover">
                                <div className="project-card-img">
                                    <a>
                                        <img
                                            src={post.thumbnailImage}
                                            alt={post.title}
                                            sizes="(min-width:86em)27.5rem, (min-width:54em)24.5rem, (min-width:42em)21.5rem, 42rem"
                                            width="864"
                                            height="486"
                                            loading="lazy"
                                            style={{ opacity: 1 }}/>
                                    </a>
                                </div>
                            </Link>
                            <h3 className="project-card-title">
                                <Link to={`/Content/${post.id}`}>{post.title}</Link>
                            </h3>
                            <Link to={`/Content/${post.id}`} className="fill-card" tabIndex="-1"></Link>
                        </article>
                    </div>
                    ))}
                </div>
            </article>
        </main>
    );
};

export default Blog;