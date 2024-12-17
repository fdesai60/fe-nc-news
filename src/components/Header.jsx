import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <header>
            <h1>NEWS</h1>
            <nav>
                <Link to="/">Topics</Link>
            </nav>
        </header>
     );
}
 
export default Header;