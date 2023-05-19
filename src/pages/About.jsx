import { MainBGDiv } from "../styles/Theme.style";

const About = () => {
  return (
    <MainBGDiv className="about">
      <div className="about__container">
        <div className="about__job">
          <h2 className="text-secondary">2022 - Now</h2>
          <h3>CLARUSWAY</h3>
          <h6>Instructor & Full Stack Developer</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            vero dolores eum ut, culpa ullam quis quasi exercitationem in
            adipisci.
          </p>
        </div>
        <div className="about__job">
          <h2 className="text-secondary">2021 - 2022</h2>
          <h3>SPE VEGA</h3>
          <h6>Engineer</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            vero dolores eum ut, culpa ullam quis quasi exercitationem in
            adipisci.
          </p>
        </div>
      </div>
    </MainBGDiv>
  );
};

export default About;
