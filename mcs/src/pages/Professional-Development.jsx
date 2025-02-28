import "../styles/overall.css";
import { Link } from "react-router-dom";

const PD = function () {
  return (
    <>
      <div className="outsideDiv">
        {/* Right Fixed Donate Button */}
        <Link to={"/donate"} className="donateButton">
          DONATE
        </Link>
        <div className="whiteBlock">
          <div className = 'bigBoldFont'>Nurturing Parenting Trainer of Trainers</div>
          <div className = 'normalFont alignCenter button1'><Link to={'https://www.nurturingparenting.com/trainer.i'}>Discover More</Link></div>
        </div>
        <div className="blueBlock">
          <div className = 'bigBoldFont'> Nurturing Parenting Facilitator Training</div>
          <div className = 'smallerFont alignCenter'>
            <b>NJ 3-Day Facilitator Training Resumes</b> <br /> November 28 - 30, 2023{" "}
            <br />
          </div>
          <div className = 'smallerFont alignCenter'>
            For training in Nurturing Parenting Programs visit Nurturing Parenting.
            <br/>
            <Link className="smallFont link" to={'https://www.nurturingparenting.com/training-workshop.html'}>Learn More Here</Link>
          </div>
        </div>
        <div className="whiteBlock">
          <div className = 'bigBoldFont'>Family Center of New Jersey Trainer</div>
          <div className="normalFont alignCenter">
            Alison Shorey <br /> (732) 650 - 0330
          </div>
        </div>
      </div>
    </>
  );
};

export default PD;
