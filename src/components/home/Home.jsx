import "../home/home.scss";
import imgforhome from "../../images/imgforhome.png";
import { useEffect } from "react";

// useEffect(() => {

// }, []);
const Home = () => {
      return (
            <section id="homeContainer">
                  <div id="leftSectionOfHome">

                        <div id="circleAnimationOfHome"></div>

                        <div id="informationOfLeftSection">
                              <div id="containerOfHomeTitle">
                                    <h1>We are a top-notch <br /> <span styles="color=blue">development</span> agency</h1>
                              </div>
                              <div id="containerOfHomeText">
                                    <p>
                                          Lorem ipsum dolor sit amet consectetur adipiscing
                                          eli mattis sit phasellus mollis sit aliquam sit
                                          nullam neque ultrices viverra nam libero justo laoreet sit.
                                    </p>
                              </div>
                              <div id="containerOfHomeButtons">
                                    <button id="firstButtonOfHome">CONTACT US</button>
                                    <button id="secondButtonOfHome">OUR SERVICES</button>
                              </div>
                        </div>
                  </div>
                  {/* <div id="containerOfRightSectionOfHome"> */}
                  <div id="rightSectionOfHome">
                        <img src={imgforhome} alt="img" />
                  </div>
                  {/* </div> */}
            </section >
      )
}
export default Home;

