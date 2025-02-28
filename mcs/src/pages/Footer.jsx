import '../styles/overall.css';
import '../styles/footer.css'
import logo from '../assets/footer-logo.webp';

const Footer = function () {
  return (
    <>

      <div className="footContainer">
        <div className='twoColumns' id='footerPlacing'>
          <div className='twoRows smallerFont'> 
              <div> (732) 650-0330</div>
              <div className='twoRows smallFont'>
                <div>2 Ethel Rd #205b</div>
                <div>Edison, NJ 08817</div>
              </div>
          </div>
          
          <a href='http://nurturingparenting.com/nrepp.html'> <img src={logo} width={800} height={80} alt="NREPP Logo"/></a>
          </div>
        <div className='smallFont alignCenter' id='footerCopyright'>&copy; 2023 by Multicultural Community Services, Inc. | Nurturing Family Center of New Jersey</div>
      </div>
    </>
  );
};

export default Footer;
