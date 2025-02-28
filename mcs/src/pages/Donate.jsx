import "../styles/overall.css";

const Donations = function () {
  return (
    <>
      <div className="outsideDiv">
        <div className="whiteBlock">
          <div className="bigBoldFont">Donations</div>
          <div className="smallerFont alignCenter">All Donations will be Greatly Acknowledged</div>
        </div>

        <div className="blueBlock">
          <div className="bigBoldFont">Check To:</div>
          <div className="smallerFont alignCenter">
            Multicultural Community Services <br />
            Ethel Rd. 205B <br />
            Edison, NJ 08817 <br />
            <br />
            <div className="smallFont">MCS is a 501 (c) 3 nonprofit</div>
          </div>
        </div>

        <div className="whiteBlock">
          <div className="twoColumns ">
            <div className="alignCenter2">
              <div className="bigBoldFont"> Contact Us</div>
              <div className="smallerFont">
                <b>Tel: </b>(732) 650 - 0330
              </div>
              <div className="smallerFont">
                <b>Fax: </b>(732) 650 - 0752
              </div>
            </div>
            <div id="contactUs" className="alignCenter2"> 
              {/* Maps iFrame */}
              <iframe className="mapsStyle" title="Google Maps - MCS Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.0290360941694!2d-74.39777362407234!3d40.540947648069945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b7fb5ce4002d%3A0x74d0135776113fe!2s2%20Ethel%20Rd%20%23205b%2C%20Edison%2C%20NJ%2008817!5e0!3m2!1sen!2sus!4v1702137105226!5m2!1sen!2sus" width="600" height="450"></iframe>
            </div>
            </div>
          </div>
          <div></div>
        </div>
    </>
  );
};

export default Donations;
