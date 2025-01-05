import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>Italian Treats</h5>
        <p>Best italian gourmet in town, give it a try!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Opening Hours</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Monday-Friday</span>
            <p>10:00am - 10:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Saturday-Sunday</span>
            <p>9:00am - 11:00pm</p>
          </div>
          <div className='delivery__time-item border-0 ps-0'>
            <span>Contact us : </span>
            <p>9876893722</p>
          </div>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
