import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-black text-base-100 p-10">
        <aside>
          <img
            className="w-20 rounded-lg"
            src="https://project-roots-1f819.web.app/static/media/logo.3780d97d85dd3b9362f6.jpg"
            alt=""
          />
          <p>
            ROOTS
            <br />© 2020 Roots. All rights reserved
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
