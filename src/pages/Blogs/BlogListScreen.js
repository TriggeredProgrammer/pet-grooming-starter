import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getBlogs, getTagList } from '../service/api';
import './BlogListScreen.css';

function BlogListScreen() {
    const navigate = useNavigate();
    const initialPage = parseInt(localStorage.getItem('currentPage')) || 1;

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [blogsPerPage] = useState(5);
    const [pagination, setPagination] = useState({
        current_page: 1,
        per_page: 5,
        total: 0,
        last_page: 1,
    });
    const [tags, setTags] = useState([]);
    const [topBlogs, setTopBlogs] = useState([]);

    useEffect(() => {
        getBlogList();
        fetchTagList();
        fetchTopBlogs();
    }, [currentPage]);

    useEffect(() => {
        localStorage.setItem('currentPage', currentPage);
    }, [currentPage]);

    const getBlogList = async () => {
        try {
            setLoading(true);
            const fetchedBlogs = await getBlogs(currentPage);
            setBlogs(fetchedBlogs.data.blogs);
            setPagination(fetchedBlogs.data.pagination);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const fetchTagList = async () => {
        try {
            const fetchedTags = await getTagList();
            setTags(fetchedTags.data);
        } catch (error) {
            console.error('Failed to fetch tags', error);
        }
    };

    const fetchTopBlogs = async () => {
        try {
            const fetchedTopBlogs = await getBlogs(1);
            setTopBlogs(fetchedTopBlogs.data.blogs.slice(0, 5));
        } catch (error) {
            console.error('Failed to fetch top blogs', error);
        }
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleBlogClick = (slug) => {
        navigate(`/blogs/${slug}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const totalPages = Math.ceil(pagination.total / pagination.per_page);

    return (
        <div className="container blog-list-container">
            <h1>DearPet Blogs</h1>
            <div className="content-container">
                <div className="blogs">
                    {blogs && blogs.map((blog, index) => (
                        <React.Fragment key={blog.id}>
                            <Link to={`/blog/${blog.slug}`}>
                                <div className="blog-card">
                                    <h2 className='blog-title'>{blog.title}</h2>
                                    {blog.cover && (
                                        <div className="blog-cover-container">
                                            <img src={blog.cover} alt={blog.title} className="blog-cover" />
                                            <div class="overlay"></div>
                                        </div>
                                    )}
                                    <span className='blog-by'>{`by ${blog.author_name} on ${new Date(blog.created_at).toLocaleDateString()}`}</span>
                                    <p className='blog-excerpt'>{blog.excerpt}</p>
                                    <Link to={`/blog/${blog.slug}`}>
                                        <button className="read-more-button" >
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </Link>
                            {index !== blogs.length - 1 && (
                                <div className="dividerBlog"></div>
                            )}
                        </React.Fragment>
                    ))}

                    <div className="paginationBlog">
                        {/* Previous button */}
                        <button
                            className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>

                        {/* Page buttons */}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}

                        {/* Next button */}
                        <button
                            className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>

                    {/* <div className="pagination">
                        {Array.from({ length: pagination.last_page }, (_, index) => (
                            <button
                                key={index + 1}
                                className={currentPage === index + 1 ? 'active' : ''}
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div> */}


                </div>
                <div className="sidebar">
                    <div className="top-blogs">
                        <h2>Top Articles</h2>
                        {topBlogs && topBlogs.map((blog, index) => (
                            <Link to={`/blog/${blog.slug}`}>

                                <div key={blog.id} className="top-blog-card" >
                                    <h3>{blog.title}</h3>
                                    <h5>{new Date(blog.created_at).toLocaleDateString()}</h5>
                                    {index !== topBlogs.length - 1 && (
                                        <div className="dividerBlog"></div>
                                    )}
                                </div>
                            </Link>

                        ))}
                    </div>
                    <div className="tag-cloud">
                        <h2>Tags</h2>
                        <div className="tags">
                            {tags && tags.map((tag) => (
                                tag ?
                                    <span key={tag} className="tag">{tag}</span> : <span></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogListScreen;
