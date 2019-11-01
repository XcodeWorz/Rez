import React from 'react';
import thumbnail from "../images/thumb8.png"
import thumbnail1 from "../images/thumb9.png"

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h1>About us</h1>
            <p>Duis leo justo, condimentum at purus eu,Aenean sed dolor sem. Etiam massa libero, auctor vitae egestas et, accumsan quis nunc.Duis leo justo, condimentum at purus eu, posuere pretium tellus.</p>
            <a href="./about.html">Read more →</a>
          </div>
          <div className="col-md-4  col-sm-6">
            <h1>Recent post</h1>
            <div className="footer-blog clearfix">
              <a href="./blog_right_sidebar.html">
                <img src={thumbnail} className="img-responsive footer-photo" alt="blog photos" />
                <p className="footer-blog-text">Hand picked ingredients for our best customers</p>
                <p className="footer-blog-date">29 may 2015</p>
              </a>
            </div>
            <div className="footer-blog clearfix last">
              <a href="./blog_right_sidebar.html">
                <img src={thumbnail1} className="img-responsive footer-photo" alt="blog photos" />
                <p className="footer-blog-text">Daily special foods that you will going to love</p>
                <p className="footer-blog-date">29 may 2015</p>
              </a>
            </div>
          </div>
          <div className="col-md-4  col-sm-6">
            <h1>Reach us</h1>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.twitter.com">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://plus.google.com">
                <i className="fa fa-google" />
              </a>
              <a href="https://www.youtube.com">
                <i className="fa fa-youtube-play" />
              </a>
              <a href="https://www.vimeo.com">
                <i className="fa fa-vimeo" />
              </a>
              <a href="https://www.pinterest.com">
                <i className="fa fa-pinterest-p" />
              </a>
              <a href="http://www.linkedin.com">
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <div className="footer-address">
              <p><i className="fa fa-map-marker" />28 Seventh Avenue, New York, 10014</p>
              <p><i className="fa fa-phone" />Phone: (415) 124-5678</p>
              {/* <p><i className="fa fa-envelope-o" /><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5b282e2b2b34292f1b293e282f3a2e293a352f75383436">[email&nbsp;protected]</a></p> */}
            </div>
          </div>
        </div>
      </div>
  </section>
  );
};

export default Footer;