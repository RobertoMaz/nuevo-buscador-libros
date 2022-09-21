import { Link } from "react-router-dom";

function NavBar() {

    const linksStyle = {
        padding: "10px",
        display: "block",
        fontSize: "18px",
        color: "white",
        textDecoration: "none"
    };

    const navContainerStyle = {
        backgroundColor: "#181d27",
        padding: "10px",
        display: "flex",
        gap: "5px",
        justifyContent: "center"
    };


    return (
        <div style={navContainerStyle}>
                <Link to="/nuevo-buscador-libros/" style={linksStyle}>Home</Link>
                <Link to="/create" style={linksStyle}>Create</Link>
        </div>
    );
}

export default NavBar;