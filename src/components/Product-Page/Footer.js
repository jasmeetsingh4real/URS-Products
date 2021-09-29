import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../../Styles/tgbFooterStyle.css";

export default function Footer() {
  return (
    <div className="tgbFooter">
      <div className="tgbContactUs">
        <h1>Contact us</h1>
        <h3>Phone No. +91-9922009205</h3>
        <h3>Email : universalrecycle24@gmail.com</h3>
      </div>

      <div className="tgbFooterLinks">
        {/* <section>
          <h1>Quick Links</h1>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Login</li>
          </ul>
        </section> */}

        <section>
          <h1>Follow us on</h1>
          <span>
            <a
              href="http://twitter.com/theuniversalre3"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="tgbSocialMedia" />
            </a>

            <a
              href="https://www.facebook.com/Universal-Recycle-Solution-104529538529409/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="tgbSocialMedia" />
            </a>

            <a
              href="https://www.instagram.com/theuniversalrecyclesolutions/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="tgbSocialMedia" />
            </a>

            <a
              href="https://www.linkedin.com/company/universal-recycle-solutions"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="tgbSocialMedia" />
            </a>
          </span>
          <p>Universal Recycle Solutions</p>
          <p>Copyright © Universal Recycle Solutions 2021 </p>
        </section>

        <section>
          <ul>
            <li>Privacy Policy</li>
            <li>Term of Use</li>
            <li>Access</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
