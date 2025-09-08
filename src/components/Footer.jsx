import styles from '../css/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Footer = () => {
    return ( 
        <footer className={styles.footer}>
         
                <ul className={styles.contact}>
                    <li>
                        <Link>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                        
                    </li>
                    <li>
                        <Link>
                            <FontAwesomeIcon icon={faPhone} />
                        </Link>
                        </li>
                    
            </ul>
            <p>©2025 news. All rights reserved</p>
       </footer>
     );
}
 
export default Footer;