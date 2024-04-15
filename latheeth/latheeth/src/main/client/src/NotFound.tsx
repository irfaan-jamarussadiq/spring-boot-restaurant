import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Oops!</h1>
            <h2>404 - Page not found</h2>
            <p>The page you are looking for is not available. Please check if the URL you entered is correct.</p>
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
}

export default NotFound;