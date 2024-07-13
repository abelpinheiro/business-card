import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faStackOverflow, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
      <div className='footer'>
        <a href='#'><FontAwesomeIcon icon={faLinkedin} beat color='white' /></a>
        <a href='#'><FontAwesomeIcon icon={faStackOverflow} beat color='white' /></a>
        <a href='#'><FontAwesomeIcon icon={faInstagram} beat color='white' /></a>
        <a href='#'><FontAwesomeIcon icon={faGithub} beat color='white' /></a>
      </div>
    )
}
