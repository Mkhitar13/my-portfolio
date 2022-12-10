import "../pages/pages.scss";
import {
      Link
} from "react-router-dom";

const Pages = () => {
      return (
            <div id="containerPages">
                  <div id="firstColumnOfPages">
                        <h2>Pages</h2>
                        <p>
                              <Link to="/Home">Home</Link>
                              <Link to="/about">About</Link>
                              <Link to="/blog">Blog</Link>
                              <Link to="/pages">Pages</Link>
                              <Link to="/services">Services</Link>
                              <Link href="">Case Studies</Link>
                              <Link href="">Case StudySingle</Link>
                              <Link href="">Blog Post</Link>
                              <Link href="">Careers</Link>
                              <Link href="">Careers Single</Link>
                              <Link href="">Pricing</Link>
                              <Link href="">Pricing Single</Link>

                        </p>
                  </div>
                  <div id="secondColumnOfPages">
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
      )
}
export default Pages;