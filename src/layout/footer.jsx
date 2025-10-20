import { Link } from 'react-router-dom';
import './layout.css';
import Logo from '../assets/source/equity.png';
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Equity Housing logo" />
            </Link>
          </div>
          <p className="section__description">
            Experience comfort, convenience, and community with our student
            accommodations, designed to make every day of campus life easier,
            safer, and more enjoyable.
          </p>
          <Link className='btn1' to="/apply">Apply Now</Link>
        </div>

        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <ul className="footer__links">
            <li><Link to="/rosenhof">Rosenhof</Link></li>
            <li><Link to="/meldine">Mildene</Link></li>
            <li><Link to="/heather">Heather Court</Link></li>
            <li><Link to="/ashbrough">Ashbrough Heights</Link></li>
            <li><Link to="/vlu">VLU</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>OUR SERVICES</h4>
          <ul className="footer__links">
            <li>
              <Link to="/apply">Single Rooms</Link>
            </li>
            <li>
              <Link to="/apply">Sharing Rooms</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>CONTACT US</h4>
          <ul className="footer__links">
            <li>
              <a href="mailto:info@equityhousing.co.za">
                info@equityhousing.co.za
              </a>
            </li>
            <li>
              <a 
                href="https://api.whatsapp.com/send?phone=27825808046"
                target="_blank"
                rel="noopener noreferrer"
              >
                +27 82 580 8046
              </a>
            </li>
          </ul>
          <div className="footer__socials">
            <a 
              href="https://www.facebook.com/equityhousingsa" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a 
              href="https://www.instagram.com/equityhousingsa?igsh=MW1xbnc1NTh1eTl0cA==" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer__bar">
        <div className="footer__bar-content">
          <p>Copyright © 2025 Equity Housing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;