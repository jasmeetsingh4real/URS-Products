import React from "react";
import { useRef } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "../../Styles/tgbFooterStyle.css";

export default function Footer() {
  const Email = "universalrecycle24@gmail.com";
  const reviewRef = useRef();
  const handleSubmitReview = (e) => {
    e.preventDefault();
    const review = reviewRef.current.value;
    if (review.trim() !== "") {
      try {
        window.location.href = `mailto:${Email}?subject=Tripple GB Product Inquiry&body=
        Customer Review: ${review}`;
        reviewRef.current.value = "";
      } catch (error) {
        alert("An error occured", error);
      }
    } else {
      alert("Can't submit an empity review!");
    }
  };
  return (
    <>
      <footer className="TripleGB_footer">
        <div className="TripleBG_footer_row1">
          <div>
            <h1 className="TripleGB_footer_Brand">
              UNIVERSAL <br />
              RECYCLE <br />
              SOLUTIONS
            </h1>
            <span className="TripleGB_footer_links">
              <a
                href="http://twitter.com/theuniversalre3"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/Universal-Recycle-Solution-104529538529409/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/theuniversalrecyclesolutions/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/universal-recycle-solutions"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </span>
          </div>
          <div className="TripleGB_footer_contacts">
            <p>
              Contact Us: <br />
              Email: <br />
              universalrecycle24@gmail.com <br />
              Phone: <br />
              +91-9922009205
            </p>
          </div>
        </div>
        <form
          className="TripleGB_footer_reviewForm"
          onSubmit={handleSubmitReview}
        >
          <textarea
            type="text"
            placeholder="Write a review..."
            ref={reviewRef}
          />
          <button>Send Email</button>
        </form>
      </footer>
      <div className="TripleGB_footer_cp">
        Copyright © Universal Recycle Solutions 2021
      </div>
    </>
  );
}
