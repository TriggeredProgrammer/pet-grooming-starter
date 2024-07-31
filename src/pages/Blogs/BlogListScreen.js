import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getBlogs, getTagList } from '../service/api';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './BlogListScreen.css'; // Ensure this CSS file reflects the new styles

function BlogListScreen() {
    const navigate = useNavigate();
    const initialPage = parseInt(localStorage.getItem('currentPage')) || 1;

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [pagination, setPagination] = useState({
        current_page: 1,
        per_page: 6,  // Change this to 6
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
            const fetchedBlogs = await getBlogs(currentPage, pagination.per_page); // Pass the per_page value
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
            const fetchedTopBlogs = await getBlogs(1, 5); // Assuming top blogs also need pagination
            setTopBlogs(fetchedTopBlogs.data.blogs.slice(0, 5));
        } catch (error) {
            console.error('Failed to fetch top blogs', error);
        }
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleBlogClick = (slug) => {
        navigate(`/blog/${slug}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const totalPages = Math.ceil(pagination.total / pagination.per_page);

    return (
        <div className="flex flex-col items-center w-full p-4 sm:p-8 lg:p-16">
            <h1 className="text-2xl font-semibold mb-6">DearPet Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
                {blogs.map((blog, index) => (
                    <div
                        onClick={() => handleBlogClick(blog.slug)}
                        className="cursor-pointer text-left p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        key={blog.id}
                    >
                        {blog.cover && (
                            <div className="mb-4 h-48 overflow-hidden rounded-lg">
                                <img
                                    className="w-full h-full object-cover"
                                    src={blog.cover}
                                    alt={blog.title}
                                />
                            </div>
                        )}
                        <div className="flex flex-col justify-between flex-grow">
                            <div>
                                <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 mb-2">{blog.title}</h2>
                                <span className="text-gray-600 text-sm">{`by ${blog.author_name} on ${new Date(blog.created_at).toLocaleDateString()}`}</span>
                                <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                            </div>
                            <button
                                onClick={() => handleBlogClick(blog.slug)}
                                className="mt-4 bg-blue text-white px-3 py-2 rounded hover:bg-blue transition-colors duration-300"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center w-full max-w-6xl mt-6">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-3 bg-blue text-white rounded hover:bg-blue disabled:opacity-50 flex items-center transition-colors duration-300"
                >
                    <FaChevronLeft className="text-xl text-white" />
                    <span className="ml-2 rounded-md">Previous</span>
                </button>
                <span className="self-center">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-3 bg-blue text-white rounded hover:bg-blue disabled:opacity-50 flex items-center transition-colors duration-300"
                >
                    <span className="mr-2 rounded-md">Next</span>
                    <FaChevronRight className="text-xl text-white" />
                </button>
            </div>

            <div className="sidebar mt-8 w-full max-w-6xl">
                <div className="top-blogs mb-6">
                    <h2 className="text-xl font-semibold mb-4">Top Articles</h2>
                    {topBlogs.map((blog) => (
                        <Link to={`/blog/${blog.slug}`} key={blog.id} className="block mb-4">
                            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-lg font-semibold text-blue-600">{blog.title}</h3>
                                <h5 className="text-gray-600 text-sm">{new Date(blog.created_at).toLocaleDateString()}</h5>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="tag-cloud">
                    <h2 className="text-xl font-semibold mb-4">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogListScreen;
