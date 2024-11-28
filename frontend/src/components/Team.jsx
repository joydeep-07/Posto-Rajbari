import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            At Sizzle & spices, Our team is the heart of every dish, With passion, dedicaion, and teamwork
            we create unforgottable flavors, deliver exceptional services and craft moments worth savoring every day! We belive that great foof starts from a great team. From the kitchen to the front of house, every member plays an vital role in delivering an exceptional experience,our Chefs, servers and staff are driven by passion, creativity and a commitment to quality. Together we work seamlessly to bring bold flavors to life and ensure every guest feels welcomed and satisfied. We serve food with unforgottable taste and memories.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
