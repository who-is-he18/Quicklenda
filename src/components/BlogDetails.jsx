import "../styles/BlogDetails.css";
import { useParams } from "react-router-dom";
import blogsData from "../data/blogData.json";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="not-found">Blog not found</div>;
  }

  return (
    <div className="blog-container">
      <h1 className="blog-title">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <p className="blog-introduction">{blog.introduction}</p>

      {/* Render sections in cards */}
      {blog.sections.map((section, index) => (
        <div key={index} className="blog-section">
          <div className="blog-card">
            <h2>{section.heading}</h2>
            {section.content.map((contentItem, subIndex) => (
              <div key={subIndex}>
                <h3>{contentItem.subheading}</h3>
                <p>{contentItem.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Conclusion section */}
      <div className="blog-conclusion">
        <h2>Conclusion</h2>
        <p>{blog.conclusion}</p>
      </div>

      {/* Comment Form */}
      <div className="comment-form-container">
        <h3>Leave a Reply</h3>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input type="url" id="website" name="website" />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment *</label>
            <textarea id="comment" name="comment" required></textarea>
          </div>
          <div className="form-group">
           
          </div>
          <button type="submit" className="submit-btn">Post Comment</button>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section company-info">
            <img src="https://quicklenda1com.wordpress.com/wp-content/uploads/2025/02/screenshot-from-2025-02-09-15-41-11.png" alt="Quicklenda Logo" className="footer-logo"/>
            <p>Quicklenda is built for financial institutions, micro-lenders, and SACCOs, providing seamless loan management solutions with clarity and precision.</p>
          </div>

          <div className="footer-section contact-info">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li><strong>Email:</strong> <a href="mailto:info@quicklenda.com">info@quicklenda.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+254716325193">+254 716 325193</a></li>
              <li><strong>Location:</strong> Nairobi, Kenya</li>
            </ul>
          </div>

          <div className="footer-section social-newsletter">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li><a href="#" target="_blank"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
              <li><a href="#" target="_blank"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="#" target="_blank"><i className="fab fa-github"></i> GitHub</a></li>
            </ul>
          </div>
          <div class="footer-section newsletter">
  <h3>Stay Updated</h3>
  <form class="subscription-form">
    <input type="email" placeholder="Enter your email" required />
    <button type="submit">Subscribe</button>
  </form>
</div>
    </div>

        

        <div className="footer-bottom">
          <p>© 2025 Quicklenda. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetails;
