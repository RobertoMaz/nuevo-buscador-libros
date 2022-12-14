import { Link } from "react-router-dom";

function Book({item}) {

    const booksContainerStyle = {
        display: "flex",
        flexDirection: "column",
        width: "300px"
    };

    const bookInfoStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        textDecoration: "none"
    };


    return (
        <div style={booksContainerStyle}>
            <Link to={`/view/${item.id}`} style={bookInfoStyle}>
            {/* <Link> */}
                <img src={item.cover} width="200" alt={item.title}></img>
                <div>{item.title}</div>
            </Link>
        </div>
    );
}

export default Book;