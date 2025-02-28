import "../styles/overall.css";
import { Link } from "react-router-dom";
import youthImg from '../assets/youth.jpg';

const Youth = function () {
  return (
    <>
      <div className="outsideDiv">
        {/* Right Fixed Donate Button */}
        <Link to={"/donate"} className="donateButton">
          DONATE
        </Link>
        <div className="whiteBlock">
          <div className="bigBoldFont">We Can Help You</div>
          <div className="twoColumns">
            <ul className="ulCircle normalFont column">
              <li>Develop Life Skills </li>
              <br />
              <li>Discover Your Options Following High School Graduation </li>
              <br />
              <li>Develop a Sense of Personal Responsibility </li>
              <br />
              <li>Acquires the organization and Study Skills for Success </li>
              <br />
            </ul>
            <ul className="ulCircle normalFont column">
              <li>Locate Job Training Programs </li>
              <br />
              <li>Identify your Career Interests and Develop a Career Plan </li>
              <br />
              <li>Learn Housing Options and Develop a Housing Plan </li>
              <br />
              <li>
                Take Charge of Your Health and Obtain your Personal Documents and
                Health Records
              </li>
            </ul>
          </div>
        </div>
        <div className="blueBlock">
          <div className="bigBoldFont"> Contact Us</div>
          <div className="normalFont alignCenter">Multicultural Community Services, Inc. </div>
          <br />

          <div className="smallerFont alignCenter">
            Lorraine C. Bavaro, M.S.W. <br />
            Division Manager <br />
            Youth & Young Adult Services <br />
            1-800-764-0703
          </div>
          <div className="smallerFont alignCenter">
            Durham Center <br />
            2 Ethel Road-Suite 205-B <br />
            Edison, N.J. 08817
            <br />
          </div>
        </div>
        <div className="whiteBlock">
                <div className="bigBoldFont alignCenter">Are You Ready for Adult Life? </div>
                <div className="normalFont alignCenter">Life Skills</div>
          <div className="twoColumns">
            <div>
                <div className="normalFont">Communication </div>
                <div className="smallerFont">Obtain the Keys to Getting What you Want </div>
                <div className="normalFont">Money Management </div>
                <div className="smallerFont">Develop a budget and obtain a bank account </div>
                <div className="smallerFont">Understand the use of credit cards and credit </div>
                <div className="normalFont">Employment </div>
                <div className="smallerFont">Learn the skills for finding and keeping a job </div>
                <div className="normalFont"> Nutrition and Self-Care</div>
                <div className="smallerFont">Take charge of your personal health </div>
                <div className="normalFont">Problem Solving & Conflict Management </div>
                <div className="smallerFont">Develop self-confidence and resiliency </div>
                <div className="normalFont">Community Resources </div>
                <div className="smallerFont">
                  Know where to go, how to get help and develop self-advocacy skills
                </div>
                <div className="smallFont">
                  <em>
                    Youth & Young Adults ages 14 to 201/2, who are in CP&P placement
                    and reside in Middlesex & Monmouth County are accepted into the
                    program.
                  </em>
                </div>
                <br />
              </div>
              <div><img src={youthImg} width={700} height={500} style={{borderRadius: '10px'}} alt="Smiling Community"/></div>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default Youth;
