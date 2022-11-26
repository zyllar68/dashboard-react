import Image from "next/image";

import logo from "@assets/logoWhite.svg";
import fbLogo from "@assets/icon-facebook.svg";
import ytLogo from "@assets/icon-youtube.svg";
import twitLogo from "@assets/icon-twitter.svg";
import pintLogo from "@assets/icon-pinterest.svg";
import intLogo from "@assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__items'>
          <div className='footer__left'>
            <Image src={logo} alt='logo' />
            <ul className='footer__socmed'>
              <li>
                <Image src={fbLogo} alt='facebook logo' />
              </li>
              <li>
                <Image src={ytLogo} alt='youtube logo' />
              </li>
              <li>
                <Image src={twitLogo} alt='facebook logo' />
              </li>
              <li>
                <Image src={pintLogo} alt='facebook logo' />
              </li>
              <li>
                <Image src={intLogo} alt='facebook logo' />
              </li>
            </ul>
            <ul className='footer__menu'>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy policy</li>
            </ul>
            <div className='footer__cta'>
              <button>Request Invite</button>
            </div>
            <div className='footer__copyright'>
              &copy; Easybank. All Rights Reserved
            </div>
          </div>
          <div className='item__right'></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
