import NavBar from "./NavBar";

function Layout({children}) {
    
    const containerStyle = {
        width: "90%",
        margin: "50px auto"
    };

    return (
        <div >
            <NavBar></NavBar>
            <div style={containerStyle}>{children}</div>
        </div>
    );
}

export default Layout;