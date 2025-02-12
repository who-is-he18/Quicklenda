import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/BlogPage.css';

const BlogPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Array of blogs with IDs
  const blogs = [
    { id: 1, title: "The Role of Automation in Streamlining Loan Approvals", image: "https://quicklenda.com/wp-content/uploads/2024/11/pexels-thisisengineering-3862132-1024x682.jpg", summary: "In the fast-paced world of finance, efficiency is paramount, especially when it comes to loan approvals. The role of automation in..." },
    { id: 2, title: "How to Use Data Analytics to Drive Loan Product Innovation", image: "https://quicklenda.com/wp-content/uploads/2024/11/Screenshot-From-2024-11-26-08-36-31-1024x521.png", summary: "In today’s competitive financial landscape, loan officers and financial institutions face an ever-growing pressure to innovate..." },
    { id: 3, title: "Expand Your Lending Business with Digital Loan Solutions", image: "https://quicklenda.com/wp-content/uploads/2024/11/pexels-pixabay-48148-1024x681.jpg", summary: "In today’s fast-paced financial landscape, loan officers and financial institutions face the challenge of managing growing loan portfolios efficiently..." },
    { id: 4, title: "Guide to Effective Communication with Borrowers", image: "https://quicklenda.com/wp-content/uploads/2024/11/pexels-olly-3760067-1024x682.jpg", summary: "Effective communication is the cornerstone of successful loan management. As loan officers, your ability to connect with borrowers..." },
    { id: 5, title: "Understanding Your Loan Better", image: "https://quicklenda.com/wp-content/uploads/2024/11/pexels-karolina-grabowska-4968384-1024x682.jpg", summary: "Navigating the world of loans can be intimidating, especially for first-time borrowers. Understanding your loan better is not just about reading the fine print..." }
  ];

  return (
    <div className="blog-page">
      {/* Back Button */}
      <div className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="back-icon" /> Back
      </div>

      <header className="blog-header">
        <div className="header-content">
          <img src="/images/image2.jpg" alt="Blog header image" className="header-image" />
          <h1>Discover insights, updates, and tips to optimize your lending process</h1>
        </div>
      </header>

      <section className="blog-list">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-item">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-meta">Uncategorized | Introduction</p>
              <p>{blog.summary}</p>
              <a href="#" className="read-more" onClick={() => navigate(`/blogs/${blog.id}`)}>Read More</a>
            </div>
          </article>
        ))}

        <article className="blog-item join-quicklenda">
          <img 
            src="https://quicklenda.com/wp-content/uploads/2024/11/Screenshot-From-2024-11-20-14-43-59-1-1536x693.png" 
            alt="Join Quicklenda" 
            className="join-image"
          />
          <div className="blog-content">
            <h2>Join Quicklenda!</h2>
            <p className="blog-meta">Loan Management System</p>
            <p>From seamless workflows to real-time insights, we empower institutions and individuals to achieve financial clarity.</p>
            <a href="#" className="read-more">Join Now</a>
          </div>
        </article>
      </section>

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
}

export default BlogPage;
