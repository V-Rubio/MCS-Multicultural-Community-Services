import "../styles/overall.css";
import {Link} from 'react-router-dom';
import familyImg from '../assets/families.jpg';
// import familyImgLong from '/Users/vi.rubio/Desktop/MCS Web App/mcs/src/images/familiesLong.jpg';
// import familyImgSoft from '/Users/vi.rubio/Desktop/MCS Web App/mcs/src/images/soft.jpeg';
import familyImgLandscape from '../assets/family-community.jpg';
// import familyImgLandscape from '/Users/vi.rubio/Desktop/MCS Web App/mcs/src/images/landscape.jpg';

const Families = function () {
  return (
    <>
      <div className="outsideDiv">
        {/* Right Fixed Donate Button */}
        <Link to={'/donate'} className="donateButton">DONATE</Link>
      <div className="whiteBlock">
        <div className="smallImage"><img src={familyImgLandscape} width={1400} height={400} style={{borderRadius: '10px'}} alt="landscape image of empty road"/></div>
        {/*  <img src={} width={1380} height={100}  alt=""/> */}
        <div className = 'bigBoldFont'>Family Programs</div>
        <div className="twoColumns"> 
          <div><img src={familyImg} width={300} height={400} style={{borderRadius: '10px'}} alt="Two parents happily throwing their baby in the air"/></div>
          <div className="">
              <div className = 'normalFont'>2001</div>
              <div className = 'smallerFont'>
                All MCS Family Programs use the evidence-based Nurturing Parenting
                Programs for all families since 2001. Link to Nurturing Parenting.
              </div>
              <div className = 'normalFont'> 2009</div>
              <div className = 'smallerFont'>
                In 2009 , MCS became the Family Nurturing Center of New Jersey. Read
                more about Family Nurturing Centers.
              </div>
            </div>
          </div>
        </div>
        <div className="blueBlock">
          <div className="twoColumns alignCenter">
            <div className = 'bigBoldFont column'>We Offer </div>
            <ul className="ulCircle normalFont column">
              <li>Teen Parent Support </li><br/>
              <li>Young Parent Support </li><br/>
              <li>Parent Support </li><br/>
              <li>Family Support </li><br/>
              <li>Family Reunification </li><br/>
            </ul>
            </div>
          </div>
          <div> 
          <div className="button1 alignCenter smallerFont"><Link to={'/donate#contactUs'}>Contact Us</Link></div>
          </div>
      </div>
    </>
  );
};

export default Families;
