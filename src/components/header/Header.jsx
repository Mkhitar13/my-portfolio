import "../header/header.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AnimatedRoutes from "../animation/AnimatedRoutes";
import Pages from "../pages/Pages";
import { DiYeoman } from "react-icons/di";
import { BiAnalyse } from "react-icons/bi";
// import HamburgerMenu from "../menuForMiniDisplay/hamburgerMenu/HamburgerMenu";
import ButtonOfHeader from "../menuButton/MenuButton";

const Header = () => {

      const [isShown, setIsShown] = useState(false);

      const handleClick = () => {
            setIsShown(current => !current);
      };

      useEffect(() => {
            document.addEventListener("click", () => setIsShown(false));
      }, []);

      return (
            <Router>
                  <div id="headerContainer">
                        <header id="header">
                              <div id="headerIconContainer">
                                    <div id="icon"><DiYeoman size="35px" color="#2460AA" /></div>
                                    <div id="textByIcon">M13</div>
                              </div>
                              <nav>
                                    <div id="linkContainer">
                                          <Link to="/Home">Home</Link>
                                    </div>
                                    <div id="linkContainer">
                                          <Link to="/about">About</Link>
                                    </div>
                                    <div id="linkContainer">
                                          <Link to="/blog">Blog</Link>
                                    </div>
                                    <div id="linkContainer" className="pages" >
                                          <Link onMouseOver={() => handleClick()}>Pages</Link>
                                          <span id="iconForPages"><BiAnalyse color="#2460AA" size="25px" /></span>

                                    </div>
                                    <div id="linkContainer">
                                          <Link to="/services">Services</Link>
                                    </div>
                                    <div id="linkContainer">
                                          <Link to="/cart">Cart</Link>
                                    </div>
                              </nav>
                              <div id="headerButtonAndMiniButtonOfMenuAndCartSection">
                                    <div id="cartSectionForMiniDisplay">
                                          <a href="#">Cart(O)</a>
                                    </div>
                                    <div id="headerButton">
                                          <button>Contact Us</button>
                                    </div>

                                    <div id="menuForMiniDisplay">
                                          <ButtonOfHeader />
                                    </div>
                              </div>
                        </header>
                  </div>

                  {isShown ? <Pages /> : null}
                  <AnimatedRoutes />

            </Router >
      )
}
export default Header;