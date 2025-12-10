import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container px-4 px-lg-5 text-center text-white-50">
        Copyright &copy; 4woln4tion4rt Website 2025 <FontAwesomeIcon icon={faHeart} />
      </div>
    </footer>
  );
}

export default Footer;