import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleBlog } from "../service/api";
import DOMPurify from "dompurify";
import "./BlogScreen.css"; // Import the CSS file

function BlogScreen() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const getBlog = async () => {
    try {
      const blogData = await getSingleBlog(slug);
      console.log(blogData);
      setBlog(blogData.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, [slug]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const sanitizedContent = DOMPurify.sanitize(blog?.content);

  return (
    <div className="container blog-screen-container">
      <div className="back-link-container">
        <span
          className="back-link mx-2"
          onClick={() => navigate("/blog")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") navigate("/blog");
          }}
        >
          Blogs
        </span>
        {` / ${blog?.title ?? ""}`}
      </div>
      {blog ? (
        <div className="blog-content">
          {blog.cover && (
            <img src={blog.cover} alt="Cover" className="blog-cover" />
          )}
          <h1 className="blog-title">{blog.title}</h1>
          <div
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
          <p className="blog-date">
            <strong>Published on: </strong>
            {new Date(blog.created_at).toLocaleDateString()}
          </p>
        </div>
      ) : (
        <div className="not-found">Blog not found</div>
      )}
    </div>
  );
}

export default BlogScreen;
