import { NavLink } from "react-router-dom";
import styles from "../css/Header.module.css"

const Header = () => {
    const handleActive = ({ isActive }) =>
        {
        return isActive ? styles.active : ''   
    }
    return ( 
        <header className={styles.header}>
            <h1>
                <span className="material-symbols-outlined">
                    description
                </span>NEWS
            </h1>
            <nav className={styles.headerNav}>
                <NavLink className={handleActive} to="/login">Login </NavLink>
                <NavLink className={handleActive}  to="/">Topics</NavLink>
            </nav>
        </header>
     );


}
 
export default Header;