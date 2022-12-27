import styles from "../pages/pages.module.scss";
import {
      Link
} from "react-router-dom";

const Pages = () => {
      return (
      <div id={styles.containerOfPagesForPositionAbsolute}>
            <div id={styles.containerOfPages}>


                  <div id={styles.firstColumnOfPages}>
                        <h2>Pages</h2>
                        <p>
                              <Link to="/Home">Home</Link>
                              <Link to="/about">About</Link>
                              <Link to="/blog">Blog</Link>
                              <Link to="/pages">Pages</Link>
                              <Link to="/services">Services</Link>
                              <Link to="/Home">Case Studies</Link>
                              <Link to="/Home">Case StudySingle</Link>
                              <Link to="/Home">Blog Post</Link>
                              <Link to="/Home">Careers</Link>
                              <Link to="/Home">Careers Single</Link>
                              <Link to="/Home">Pricing</Link>
                              <Link to="/Home">Pricing Single</Link>

                        </p>
                  </div>
                  <div id={styles.secondColumnOfPages}>
                        <h2>Utility pages</h2>
                        <p>
                              <Link to="/Home">Start Here</Link>
                              <Link to="/Home">Style Guide</Link>
                              <Link to="/Home">Password Protected</Link>
                              <Link to="/Home">404 Not Found</Link>
                              <Link to="/Home">Licenses</Link>
                              <Link to="/Home">Changelog</Link>
                              <Link to="/Home">Browse More Templates</Link>
                        </p>
                  </div>
            </div>
      </div>
      )
}
export default Pages;