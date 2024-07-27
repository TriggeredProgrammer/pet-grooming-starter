import React, { useState } from "react";
import Logo from "../../assets/images/dark-logo.png";
import FacebookIcon from "../../assets/images/Facebook.svg";
import InstagramIcon from "../../assets/images/Instagram.svg";
import LinkedinIcon from "../../assets/images/LinkedIn.svg";
import YoutubeIcon from "../../assets/images/YouTube.svg";
import EmailIcon from "../../assets/icons/email-icon.svg";
import PhoneIcon from "../../assets/icons/phone-icon.svg";
import LocationNewIcon from "../../assets/icons/location-new-icon.svg";
import insta1 from "../../assets/images/insta1.jpg";
import insta2 from "../../assets/images/insta2.jpg";
import insta3 from "../../assets/images/insta3.jpg";
import insta4 from "../../assets/images/insta4.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setMessage("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    // Placeholder for the actual API call
    // const data = await saveNewsLetter({ email });
    // if (data.message === "Email already exists.") {
    //   setError(data.message);
    // } else {
    //   setMessage(data.message);
    // }
    setEmail("");
  };

  return (
    <div className="bg-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="mb-4">
              <img
                src={Logo}
                alt="logo"
                className="w-32"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <p className="text-center md:text-left mb-4">
              Subscribe to our newsletter and never miss out on our exclusive
              updates and offers.
            </p>
            <form
              className="flex flex-col md:flex-row items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md border border-gray-600 bg-blue-700 text-white mb-2 md:mb-0 md:mr-2"
                value={email}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="bg-orange-500 p-2 rounded-md text-white hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
            {message && <div className="text-green-400 mt-2">{message}</div>}
            {error && <div className="text-red-400 mt-2">{error}</div>}
          </div>

          {/* Footer Links */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg font-semibold mb-4">Menu</p>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://dearpet.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="/t-policy" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/rr-policy" className="hover:underline">
                  Return & Refund Policy
                </a>
              </li>
              <li>
                <a href="/p-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram and Contact */}
          <div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg font-semibold mb-4 text-center md:text-left">
                Follow on Instagram
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <img
                  src={insta1}
                  alt="Photo 1"
                  className="w-24 h-24 object-cover"
                />
                <img
                  src={insta2}
                  alt="Photo 2"
                  className="w-24 h-24 object-cover"
                />
                <img
                  src={insta3}
                  alt="Photo 3"
                  className="w-24 h-24 object-cover"
                />
                <img
                  src={insta4}
                  alt="Photo 4"
                  className="w-24 h-24 object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
              <p className="text-lg font-semibold mb-4 text-center md:text-left">
                Contact Us
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="tel:+917599975888"
                    className="flex items-center hover:underline"
                  >
                    <img
                      src={PhoneIcon}
                      alt="phone-icon"
                      className="w-5 h-5 mr-2"
                    />{" "}
                    +91 7599975888
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@dearpet.in"
                    className="flex items-center hover:underline"
                  >
                    <img
                      src={EmailIcon}
                      alt="email-icon"
                      className="w-5 h-5 mr-2"
                    />{" "}
                    support@dearpet.in
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/NQbfn49SW3fHNkkCA"
                    className="flex items-center hover:underline"
                  >
                    <img
                      src={LocationNewIcon}
                      alt="location-icon"
                      className="w-5 h-5 mr-2"
                    />{" "}
                    A-2/ 145 A, Block C8, Keshav Puram, Tri Nagar, New Delhi,
                    Delhi, 110035
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="text-gray-300 mb-4">
          <p>
            © 2024 Bark Buddies Pvt Ltd |{" "}
            <span className="text-gray-400">All Rights Reserved</span>
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/dearpet.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/dearpet.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="instagram" className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/dear-pet-india/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="linkedin" className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC28Md2tQWMsWE3-r-3drUvw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YoutubeIcon} alt="youtube" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
