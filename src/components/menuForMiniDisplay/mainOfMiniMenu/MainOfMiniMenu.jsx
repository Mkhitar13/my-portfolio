// import styles from "../../menuForMiniDisplay/mainOfMiniMenu/MainOfMiniMenu";
import styles from "../mainOfMiniMenu/mainOfMiniMenu.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiSunRadiations } from "react-icons/gi";
import Pages from "../../pages/Pages";

const MainOfMiniMenu = (props) => {
      const [isShown, setIsShown] = useState(false);

      const handleClick = (e) => {
            isShown ? e.target.style.display = "grid" : e.target.style.display = "block";
            setIsShown(!isShown);
      };

      // const handleStyle = () => {
            // display: 'grid',
            // transition: "1s",
            // opacity: "0.5",
            // height: "100vh",
      // }

      return (
            <div id={styles.containerOfMiniMenu} style={{minHeight:"100vh", transition:"1s", }}>
                  <nav>
                        <div className={styles.linkContainerForMiniMenu}>
                              <Link to="/Home">Home</Link>
                        </div>
                        <div className={styles.linkContainerForMiniMenu}>
                              <Link to="/blog">Blog</Link>
                        </div>

                        <div className={styles.linkContainerForMiniMenu} id={styles.pagesToggleForMiniMenu} >
                              <Link onClick={handleClick}>Pages</Link>
                              <span id={styles.iconForPages}>
                                    <GiSunRadiations color="#2166FF" size="35px" />
                              </span>
                        </div>
                        <div
                              className={styles.linkContainerForMiniMenu}
                              id={styles.pagesSideInMiniMenu}
                              // style={isShown ? handleStyle : null}
                        >
                              <Pages />
                        </div>
                        <div className={styles.linkContainerForMiniMenu}>
                              <Link to="/services">Services</Link>
                        </div>
                        <div className={styles.linkContainerForMiniMenu}>
                              <Link to="/cart">Cart</Link>
                        </div>
                  </nav >
                  <div id={styles.headerButtonForMiniMenu}>
                        <button>Contact Us</button>
                  </div>
            </div >
      )
}
export default MainOfMiniMenu;