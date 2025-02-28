import "../styles/overall.css";
import { Link } from "react-router-dom";
import homeImg from '../assets/home.jpg';
import homeImg2 from '../assets/home2.jpg';
const Home = function () {
  return (
    <>
      <div className="outsideDiv">
        {/* Right Fixed Donate Button */}
        <Link to={"/donate"} className="donateButton">
          DONATE
        </Link>
        <div className="whiteBlock">
          
          <div className="twoColumns">
            <div className="smallImage"><img src={homeImg} width={300} height={400} style={{borderRadius: '10px'}} alt="Smiling Community"/></div>
            <div> 
              <a href="http://nurturingparenting.com/fncnc.html" id="bigLink"><div className="bigBoldFont alignLeft">Family Nurturing Center of New Jersey</div></a> 
              <div className="smallerFont">
                Family Nurturing Centers are licensed by Family Development
                International
              </div>
              <div className="smallerFont">
              Multicultural Community Services provides competent, bilingual,
              community-based human services and educational programming that
              promotes and improves the quality of life. We believe that diversity
              broadens and enriches our social, cultural, educational and
              community perspectives and deepens our appreciation for all members
              of society. We further believe that all community members have a
              right to a safe and supportive service delivery environment that is
              free from discrimination regardless of race, class, sexual
              orientation, ethnicity, gender, learning differences or nationality.
              <br />
              <div className="smallFont">
                MCS uses the Nurturing Parenting Programs with all families. <a href="http://nurturingparenting.com/" id="smallLink">Learn more here.</a>
              </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="blueBlock">
          
            <div className="twoColumns">
              <div className="smallImage"><img src={homeImg2} width={300} height={400} style={{borderRadius: '10px'}} alt="Two friends with arms around each other"/></div>
              <div> 
                <div className="bigBoldFont">Evidence Based Trauma Informed Protective Factors</div>
                <ul className="ulCircle normalFont addMarginLeft">
                  <li>Safety</li>
                  <br />
                  <li>Trustworthiness and Transparency </li>
                  <br />
                  <li>Peer Support </li>
                  <br />
                  <li>Collaboration and Mutuality </li>
                  <br />
                  <li>Empowerment, Voice, and Choice </li>
                  <br />
                  <li>Cultural, Historical, and Gender Issues</li>
                  <br />
                </ul>
              </div>
              
            </div>
        </div>
        <div className="button1 alignCenter smallerFont"><Link to={'/donate#contactUs'}>Contact Us</Link></div>
      </div>
    </>
  );
};

export default Home;
