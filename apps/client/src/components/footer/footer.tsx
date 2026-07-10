import type { FC } from 'react';
import packageJson from '../../../package.json';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Imprint from './imprint';
import './footer.css';
import Privacy from './privacy';

type FooterProps = {
  short?: boolean;
};

const Footer: FC<FooterProps> = ({ short = false }) => (
  <small className="text-black-50">
    v{packageJson.version}
    {!short && (
      <>
        <div>
          made an maintained with{' '}
          <FontAwesomeIcon icon={faHeart} style={{ color: '#00cc00' }} />
          {' '}by
          &nbsp;
          <a href="https://spree.de">tech@spree</a>, {' '}
          <a href="https://www.tngtech.com/en/">TNG Technology Consulting</a>{' '}
          and Careem
        </div>
        <div>
          Elevation of Privilege was originally invented at Microsoft,
          Cornucopia was developed at OWASP, Cumulus was started at{' '}
          <a href="https://www.tngtech.com/en/">TNG Technology Consulting</a>,
          Elevation of MLsec was developed at{' '}
          <a href="https://www.kantega.no/">Kantega AS</a>.
        </div>
        <div className="footer-container">
          <Imprint />
          <Privacy />
        </div>
      </>
    )}
  </small>
);

export default Footer;
