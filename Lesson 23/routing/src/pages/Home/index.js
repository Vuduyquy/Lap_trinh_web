import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Home = () => {
    const [isRedirect, setIsRedirect] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    const handleSetRedirect = () => {
        //setIsRedirect(true);
        //navigate('/contact');
        setSearchParams({
            page: 5,
            limit: 10,
        });
    };

    const listPost = [
        {
            id: 1,
            title: "man must explore, and this is exploration at its greatest",
            subtitle: "Problems look mighty small from 150 miles up",
            author: 'Start Bootstrap',
            time: 'on September 24, 2023',
        },
        {
            id: 2,
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            author: 'Start Bootstrap',
            time: 'on September 18, 2023',
        },
        {
            id: 3,
            title: "Science has not yet mastered prophecy",
            subtitle: "We predict too much for the next year and yet far too little for the next ten.",
            author: 'Start Bootstrap',
            time: 'on August 24, 2023',
        },
        {
            id: 4,
            title: "Failure is not an option",
            subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            author: 'Start Bootstrap',
            time: 'on July 8, 2023',
        },
    ];

    const convertToSlug = (title) => {
        return title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    };

    return (
        <div className="container px-4 px-lg-5">
            <button onClick={handleSetRedirect}>Redirect</button>
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    {
                        listPost.map((post) => (
                            <>
                                {/* Post preview*/}
                                <div className="post-preview">
                                    <Link to={`sample-post/${convertToSlug(post.title)} -${post.id}.html`}>
                                        <h2 className="post-title">{post.title}</h2>
                                        <h3 className="post-subtitle">{post.subtitle}</h3>
                                    </Link>

                                    <p className="post-meta">
                                        Posted by
                                        <a href="#!">{post.author}</a>
                                        {post.time}
                                    </p>
                                </div>
                                Divider
                                <hr className="my-4" />

                            </>
                        ))
                    }
                    {/* Pager*/}
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>

    )
}
export default Home;