/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pic4.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Creation of students review website in Tec de Monterrey",
    description:
      "Collaboration to create a friendly website that provide students a way to rate college classes and professors",
    url: "https://github.com/SantiagoVelasquezChangMLSA/ecoa",
  },
  {
    title: "Update and Maintainance of Courses Website",
    description:
      "Contributed in the maintainance and modifying of the website of courses for professionals",
    url: "https://github.com/SantiagoVelasquezChangMLSA/Servicio-Becario",
  },
  {
    title: "App Nuevo Amanecer",
    description:
      "Contributed in the creation of the app for an association that helps kids with disabilities learn ",
    url: "https://github.com/SantiagoVelasquezChangMLSA/Login-Signup",
  },
  {
    title: "Interconecction of Devices",
    description:
      "Contributed in the creation of a simulation of a network in packet tracer for a building and all related to the business",
    url: "https://youtu.be/YrJ4jm5QBP0?si=qziAhRwzYusZyf5x",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
