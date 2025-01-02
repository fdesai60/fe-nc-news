import { Link } from "react-router-dom";
const NotFound = () => {
    return (
    <div className="NotFound">
        <h2>404</h2>
        <p>Sorry, page not found...</p>
        <Link to="/">Click here to choose an article topic</Link>
    </div> 
    );
}
 
export default NotFound;