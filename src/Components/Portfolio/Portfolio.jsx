import React from "react";
import "./Portfolio.css";
import img1 from "../../Assets/portfolio1.jpg";
import img2 from "../../Assets/portfolio2.jpg";
import img3 from "../../Assets/portfolio3.jpg";
import img4 from "../../Assets/portfolio4.jpg"


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Weather-app</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Naomi183/Weather-app" target="_blank" rel="noreferrer" className="btn">
              Github
            </a>
            <a href="https://marvelous-empanada-c41f51.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
          </div>
          <h3>Chrome Dino clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Naomi183/Chrome-Dino-Game" target="_blank" rel="noreferrer" className="btn">
              Github
            </a>
            <a href="chrome-dino-game-j2me-e5mfmcizq-naomi183.vercel.app" target="_blank" rel="noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="" />
          </div>
          <h3>Wordle Clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Naomi183/Wordle-clone" target="_blank" rel="noreferrer" className="btn">
              Github
            </a>
            <a href="https://wordle-clone-dun-five.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img4} alt="" />
          </div>
          <h3>Online Store</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Naomi183/third-semester-project" target="_blank" rel="noreferrer" className="btn">
              Github
            </a>
            <a href="https://third-semester-project-1oyf.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
