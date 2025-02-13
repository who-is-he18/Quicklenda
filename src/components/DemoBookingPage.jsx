import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/DemoBookingPage.css';


const DemoBookingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div>
       
      {/* Hero Section */}
      <section className="quicklenda-hero">
        <div className="hero-container">
          <div className="hero-image" data-aos="fade-up">
            <img
              src="https://quicklenda.com/wp-content/uploads/2024/11/Screenshot-From-2024-11-20-14-43-59-1-1536x693.png"
              alt="Quicklenda Loan Management"
            />
          </div>

          <div className="hero-content" data-aos="fade-up">
            <h1>Simplify Your Lending with Quicklenda</h1>
            <p className="subtitle">
              Welcome to Quicklenda loan management system, the smarter way to
              manage loans. Whether you’re a lender, borrower, or financial
              institution, our powerful platform streamlines the entire loan
              lifecycle.
            </p>
            <div className="hero-buttons" data-aos="fade-up" data-aos-delay="200">
              <a href="#demo-booking" className="btn-primary">
                Sign Up Now
              </a>
              <a href="/blogs" className="btn-secondary">
                Go to blogs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Quicklenda Section */}
      <section className="why-quicklenda">
        <div className="section-header" data-aos="fade-up">
          <h2>Why Quicklenda?</h2>
          <p>Why Choose Us</p>
        </div>

        <div className="card-container">
          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <div className="card-image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2037/2037177.png"
                alt="Loan Management"
              />
            </div>
            <div className="card-content">
              <h3>Loan Management</h3>
              <p>From application to disbursement, manage everything in one place.</p>
            </div>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="400">
            <div className="card-image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10181/10181558.png"
                alt="Real-Time Insights"
              />
            </div>
            <div className="card-content">
              <h3>Real-Time Insights</h3>
              <p>Access data-driven analytics to make smarter financial decisions.</p>
            </div>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="600">
            <div className="card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1BNpWs1YVJzsShrP_FCU05LvzIdj2tAD2A&amp;s"
                alt="Secure and Scalable"
              />
            </div>
            <div className="card-content">
              <h3>Secure and Scalable</h3>
              <p>Built with top-tier security protocols to protect your data and grow with your business.</p>
            </div>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="800">
            <div className="card-image">
              <img
                src="https://cdn.vectorstock.com/i/500p/82/70/user-friendly-information-sign-vector-54608270.jpg"
                alt="User-Friendly Interface"
              />
            </div>
            <div className="card-content">
              <h3>User-Friendly Interface</h3>
              <p>Simplified workflows designed for ease of use, even for non-tech-savvy users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works" id="how-it-works">
    <div class="section-header">
        <h2 data-aos="fade-up">How It Works!</h2>
    </div>

    <div class="card-container">
        <div class="card" data-aos="fade-right">
            <div class="card-content">
                <h3>Register Borrowers</h3>
                <p>Easily create borrower profiles with personal, financial, and credit history details in a centralized system. Manage borrower data efficiently to streamline loan evaluations.</p>
            </div>
        </div>

        <div class="card" data-aos="fade-left">
            <div class="card-content">
                <h3>Submit Loan Applications</h3>
                <p>Borrowers can apply for loans online with a simple, user-friendly form. Capture loan amount, terms, and repayment preferences effortlessly.</p>
            </div>
        </div>

        <div class="card" data-aos="fade-right">
            <div class="card-content">
                <h3>Automate Loan Approvals</h3>
                <p>Speed up approvals with automated credit checks and custom eligibility criteria. Instantly notify borrowers via SMS or email about their application status.</p>
            </div>
        </div>

        <div class="card" data-aos="fade-left">
            <div class="card-content">
                <h3>Disburse Funds Quickly</h3>
                <p>Disburse approved loans directly to borrowers through M-Pesa or bank accounts. Provide real-time status updates for transparency and trust.</p>
            </div>
        </div>

        <div class="card" data-aos="fade-right">
            <div class="card-content">
                <h3>Monitor Loan Repayments</h3>
                <p>Track repayments with automated schedules and reminders. Borrowers can repay securely through integrated payment systems like M-Pesa.</p>
            </div>
        </div>

        <div class="card" data-aos="fade-left">
            <div class="card-content">
                <h3>Manage Late Payments</h3>
                <p>Automatically calculate penalties for overdue payments and send SMS reminders to borrowers. Ensure consistent cash flow and repayment compliance.</p>
            </div>
        </div>

        <div class="card" data-aos="fade-right">
            <div class="card-content">
                <h3>Advanced Reports</h3>
                <p>Use customizable reports and an analytics dashboard to gain insights into loan performance, repayments, and borrower trends. Make data-driven decisions to improve operations.</p>
            </div>
        </div>

        <div class="card" data-aos="fade-left">
            <div class="card-content">
                <h3>Oversee Branches and Users</h3>
                <p>Manage multiple branches, track expenses, and control access with a secure user management system. Ensure transparency and efficiency across your organization.</p>
            </div>
        </div>
    </div>
</section>
          {/* FEATURES */}

<section class="loan-management-system" id="features">
<div class="section-header">
        <h2 data-aos="fade-up">Features</h2>
    </div>
    <br></br>

    <div class="system-container">
        <div class="main-content" data-aos="fade-up">
            <h2>Loan Management System</h2>
            <p class="lead">Whether you’re at home, at work, or on the go, our online banking platform is accessible from your computer, tablet, or mobile device. With our mobile banking app, you can even deposit checks and manage your accounts on the go.</p>
        </div>

        <div class="feature-cards">
            <div class="feature-card" data-aos="fade-right">
                <div class="feature-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDGxZX4eihP2dVTUcLrBrPzxX8-rC-_c25w&amp;s" alt="Flexible Payment Options"/>
                </div>
                <h3>Flexible Payment Options</h3>
                <p>Facilitate easy repayments through multiple payment options, including popular methods like M-Pesa.</p>
            </div>

            <div class="feature-card" data-aos="fade-left">
                <div class="feature-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrnpQWeq_FNxPCS3hvh9ubJZ5Qkr6oFlOIg&amp;s" alt="Automated Compliance" />
                </div>
                <h3>Automated Compliance</h3>
                <p>Stay compliant with automated penalty calculations and notifications.</p>
            </div>

            <div class="feature-card" data-aos="fade-right">
                <div class="feature-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRe1xmHe61CIsnDxnfc_CgaD3Do0Du9erKWg&amp;s" alt="Real-Time Analytics" />
                </div>
                <h3>Real-Time Analytics</h3>
                <p>Monitor key performance indicators in real-time with our analytics dashboard.</p>
            </div>

            <div class="feature-card" data-aos="fade-left">
                <div class="feature-image">
                    <img src="https://www.shutterstock.com/image-vector/efficient-use-funds-money-management-600nw-2107403843.jpg" alt="Expense Management" />
                </div>
                <h3>Expense Management</h3>
                <p>Manage operational expenses easily with our integrated expense management feature.</p>
            </div>
        </div>
    </div>
</section>
            {/* OVERVIEW */}
<section class="quicklenda-process" id="overview">
<div class="section-header">
        <h2 data-aos="fade-up">Overview</h2>
    </div>
    <br></br>
    <div class="process-container">
        <div class="process-item" data-aos="fade-right">
            <div class="process-image">
                <img src="https://quicklenda.com/wp-content/uploads/2024/11/M-PESA-4-1-1024x1024.png" alt="Loan Application"/>
            </div>
            <div class="process-content">
                <div class="step-marker">1</div>
                <h3>Loan Application</h3>
                <p>Our streamlined loan application process allows users to apply online within minutes. Reduce paperwork and enhance accessibility for all Kenyans.</p>
            </div>
        </div>

        <div class="process-item" data-aos="fade-left">
            <div class="process-image">
                <img src="https://quicklenda.com/wp-content/uploads/2024/11/download-650x416.png" alt="Approval Process"/>
            </div>
            <div class="process-content">
                <div class="step-marker">2</div>
                <h3>Approval and Disbursement</h3>
                <p>Experience quick loan approvals with our automated system. Once approved, funds are disbursed rapidly, ensuring borrowers have access to the money they need when they need it.</p>
            </div>
        </div>

        <div class="process-item" data-aos="fade-right">
            <div class="process-image">
                <img src="https://quicklenda.com/wp-content/uploads/2024/11/Screenshot-From-2024-11-20-14-22-56.png" alt="Repayment Options"/>
            </div>
            <div class="process-content">
                <div class="step-marker">3</div>
                <h3>Loan Repayment</h3>
                <p>Facilitate easy repayments through multiple payment options, including popular methods like M-Pesa. This flexibility helps borrowers stay on track with their payments.</p>
            </div>
        </div>
    </div>
</section>

<section class="lending-team">
    <div class="content" data-aos="fade-up">
        <h2>Empower Your Lending Team</h2>
        <ul>
            <li><strong>User Management:</strong> Role-based access control for enhanced security</li>
            <li><strong>Branch Management:</strong> Centralized control with local flexibility</li>
            <li><strong>Reporting:</strong> Generate detailed reports with one click</li>
            <li><strong>Communication:</strong> Integrated SMS for seamless customer engagement</li>
        </ul>
    </div>
    <div class="image" data-aos="fade-left">
        <img src="https://quicklenda.com/wp-content/uploads/2024/11/Screenshot-From-2024-11-20-14-24-03.png" alt="Empower Lending Team"/>
    </div>
</section>

<section class="lending-control">
    <div class="image" data-aos="fade-right">
        <img src="https://quicklenda.com/wp-content/uploads/2024/11/M-PESA-1-768x768.png" alt="Lending Business Control"/>
    </div>
    <div class="content" data-aos="fade-left">
        <h2>Take Control of Your Lending Business</h2>
        <ul>
            <li>Reduce loan default rates</li>
            <li>Increase collection efficiency</li>
            <li>Make data-driven decisions</li>
            <li>Scale operations effortlessly</li>
            <li>Enhance customer satisfaction</li>
        </ul>
    </div>
</section>

<section class="testimonial">
    <div class="testimonial-content">
        <p class="quote">
            "Since adopting Quicklenda, our loan processing time has reduced by 50%. The analytics dashboard helps us make smarter decisions every day!"
        </p>
        <p class="author">— Jacob Jones, CEO @ Penta</p>
    </div>
</section>
       {/* DEMO BOOKING */}
<section id="demo-booking">
  <div className="demo-booking-content">
    <h2>Schedule a Demo: See Quicklenda in Action!</h2>
    <p>
      Ready to simplify your loan management process? Discover how Quicklenda can transform the way you handle borrower management, loan applications, repayments, and more. Book a personalized demo today to see how it works for your business.
    </p>
    <h3>Why Book a Demo?</h3>
    <ul>
      <li><strong>Personalized Insights:</strong> Understand exactly how our platform fits your workflow.</li>
      <li><strong>Hands-On Experience:</strong> See our intuitive interface and powerful tools in action.</li>
      <li><strong>Get Expert Advice:</strong> Learn best practices for managing loans, tracking repayments, and scaling your operations.</li>
    </ul>
    <img src="/images/image1.svg" alt="Quicklenda Demo" className="demo-image" />
  </div>

  <form action="" method="POST">
    <div className="form-group">
      <label htmlFor="first-name">First Name *</label>
      <input type="text" id="first-name" name="firstName" required />
    </div>

    <div className="form-group">
      <label htmlFor="last-name">Last Name *</label>
      <input type="text" id="last-name" name="lastName" required />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email *</label>
      <input type="email" id="email" name="email" required />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone *</label>
      <input type="tel" id="phone" name="phone" required />
    </div>

    <div className="form-group">
      <label htmlFor="demo-duration">How long would you like the demo to be?</label>
      <select id="demo-duration" name="demoDuration">
        <option value="15-minute">15-minute introductory call</option>
        <option value="30-minute">30-minute screen share summary</option>
        <option value="45-minute">45-minute overview</option>
        <option value="60-minute">60-minute full presentation</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="loan-system">What loan management system are you currently using?</label>
      <input type="text" id="loan-system" name="loanSystem" />
    </div>

    <div className="form-group">
      <label htmlFor="help-needed">I need help with...</label>
      <textarea id="help-needed" name="helpNeeded"></textarea>
    </div>

    <div className="form-group">
      <button type="submit">Submit</button>
    </div>
  </form>
</section>

<footer class="footer">
    <div class="footer-container">
        {/* <!-- Company Info &amp; Logo --> */}
        <div class="footer-section company-info">
            <img src="https://quicklenda1com.wordpress.com/wp-content/uploads/2025/02/screenshot-from-2025-02-09-15-41-11.png" alt="Quicklenda Logo" class="footer-logo"/>
            <p>Quicklenda is built for financial institutions, micro-lenders, and SACCOs, providing seamless loan management solutions with clarity and precision.</p>
        </div>

        <div class="footer-section contact-info">
            <h3>Contact Us</h3>
            <ul class="contact-list">
                <li><strong>Email:</strong> <a href="mailto:info@quicklenda.com">info@quicklenda.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+254716325193">+254 716 325193</a></li>
                <li><strong>Location:</strong> Nairobi, Kenya</li>
            </ul>
        </div>

        <div class="footer-section social-newsletter">
            <h3>Follow Us</h3>
            <ul class="social-links">
                <li><a href="#" target="_blank"><i class="fab fa-twitter"></i> Twitter</a></li>
                <li><a href="#" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                <li><a href="#" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></li>
                <li><a href="#" target="_blank"><i class="fab fa-github"></i> GitHub</a></li>
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

    {/* <!-- Footer Bottom --> */}

    <div class="footer-bottom">
        <p>© 2025 Quicklenda. All Rights Reserved.</p>
    </div>
</footer>
    </div>
  );
};
export default DemoBookingPage;
