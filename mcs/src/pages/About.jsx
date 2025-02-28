import "../styles/overall.css";
import { Link } from "react-router-dom";

const About = function () {
  return (
    <>
      <div className="outsideDiv">
        {/* Right Fixed Donate Button */}
        <Link to={"/donate"} className="donateButton">
          DONATE
        </Link>
        <div className="whiteBlock">
          <div className="bigBoldFont">Who We Are</div>
          <div className="smallerFont alignCenter">
            A 501 (c) 3 private nonprofit agency in New Jersey. It was founded
            in 2001 by a group of seasoned professionals. MCS uses evidenced
            based best practices in all programs to assist families, children,
            youth, and young adults.{" "}
          </div>
        </div>
        <div className="blueBlock">
          <div className="bigBoldFont">Our Approach</div>
          <div className="normalFont alignCenter">Promotive Protective Factors</div>
            <div className="twoColumns"> 
              <ul className="ulCircle normalFont column">
                <li>Nurturing and Attachment </li>
                <br />
                <li>Knowledge of Parenting and of Child and Youth Development</li>
                <br />
                <li>Parental Resilience</li>
                <br />
                </ul>
              <ul className="ulCircle normalFont column">
                <li>Social Connections </li>
                <br />
                <li>Concrete Supports for Parents</li>
                <br />
                <li>Social and Emotional Competence of Children</li>
                <br />
              </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
