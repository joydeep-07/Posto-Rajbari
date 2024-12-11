import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to <strong>Posto Rajbari</strong>, Where every meal is a flavourful journey! We're passionate about crafting dishes that ignite your senses an dleave you craving more. From Sizzling hot plates to perfectly spices recipies, our menu is a celebration of bold flavors and culinary artistry.

              At <strong>Posto Rajbari</strong> , we belive that food is more than just sustenance - it's an experience. That's why we prioritize fresh, hogh-quality ingridients and a warm, invitiong atmosphere where friends and families come togeather to share memorable moments.
            </p>

            {/* <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link> */}
          </div>
          <div className="banner">
            <img className="aboutbanner" src="https://i.pinimg.com/474x/d0/e1/99/d0e19961c79a3e257192a552222417c2.jpg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
