import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../styles/navbar.css";
import {Link} from 'react-router-dom';

const navbar = function () {
  return (
    <>
    <div className="fixToTop whiteBlockNavbar">
      <div>
        <Link to={'/'} className='logo'>Multicultural Community Services</Link>
        <div className='smallLogo'>a 501(c)3 private non-profit</div>
        <Navbar bg="light" data-bs-theme="light" sticky="top">
          {/* <a class="nav-item nav-link active" href="#">
                  Home <span class="sr-only">(current)</span>
                </a> */}
          <Container>
            {/* <Navbar.Brand href="/">Home</Navbar.Brand> This should be Logo*/}
            <Nav>
              <ul className='ulNone'> 
                <li>
                  <Nav.Link href="./">
                    Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="./about">
                    About
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="./youth">
                    Youth
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="./families">
                    Families
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    href="./professional-development"
                  >
                    Professional Development
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="./donate">Donate</Nav.Link>
                </li>
              </ul>
            </Nav>
          </Container>
        </Navbar>
        </div>
      </div>
    </>
  );
};

export default navbar;
