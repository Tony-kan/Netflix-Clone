import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",handleShow);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        // src="https://upload.wikimedia.org/wikipedia/commons/0/0f"
        src="https://i0.wp.com/www.dishinfo.com/wp-content/uploads/2022/02/NetflixLogoBlack.jpeg?fit=690%2C331&ssl=1"
        // src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1"
        // src="https://logowik.com/content/uploads/images/750_netflix.jpg"
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxb8A7Ra_XhFcf845bg1ksefJliQSTlVsmA&usqp=CAU"
        // src="https://www.pxpng.com/public/uploads/small/21630943641kgvnyjrz9tvoq0burkfcizt8gxvlsn2pzjryvvckc4jwgrbjj6pdrtdqhspv3da6oqdwjnwfgv0u0e41b6vx75emvijckdvrqlxa.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;
