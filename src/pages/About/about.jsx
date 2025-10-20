import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./about.css";
import aboutImg from "../../assets/section/about.jpeg";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease",
    };

    const sr = ScrollReveal();

    // Header container
    sr.reveal(".header__container p", {
      ...scrollRevealOption,
    });

    sr.reveal(".header__container h1", {
      ...scrollRevealOption,
      delay: 500,
    });

    // About container
    sr.reveal(".about__image img", {
      ...scrollRevealOption,
      origin: "left",
    });

    sr.reveal(".about__content .section__subheader", {
      ...scrollRevealOption,
      delay: 500,
    });

    sr.reveal(".about__content .section__header", {
      ...scrollRevealOption,
      delay: 1000,
    });

    sr.reveal(".about__content .section__description", {
      ...scrollRevealOption,
      delay: 1500,
    });

    sr.reveal(".about__btn", {
      ...scrollRevealOption,
      delay: 2000,
    });
  }, []); // runs once when component mounts

  return (
    <div className="section__container about__container" id="about">
      <div className="about__image">
        <img src={aboutImg} alt="About" />
      </div>

      <div className="about__content">
        <p className="section__subheader">ABOUT US</p>
        <h2 className="section__header">The Best Student Life Starts Here!</h2>

        <p className="section__description">
          Equity Housing provides students with a safe and comfortable living environment that feels like home. 
          Our mission is to create a supportive community where students thrive academically and socially, 
          while enjoying modern amenities and hassle-free living.
          <br /><br />
          Founded by people who understand student needs, our focus is on creating secure environments that 
          support academic success and personal growth. We work closely with institutions like the University of the Free State 
          and the Central University of Technology to maintain high standards and reliable service.
        </p>

        <div className="gallery">
          <div className="gallery__btn about__btn">
            <div className="gallery__inner"></div>
            <Link to="/gallery" className="inner__gallery_name">Our Gallery</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
