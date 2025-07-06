// Navbar.jsx
import "./Navbar.css";

export function Navbar({ toggleDarkMode, darkMode }) {
    return (
        <div className="navbar">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient’s username"
                       aria-label="Recipient’s username" aria-describedby="basic-addon2"/>
                <span className="input-group-text" id="basic-addon2"><i className={"bi bi-search"}></i></span>
               <button style={{width:'8%',height:'6vh',borderRadius:'50%',marginLeft:'10px'}} className={"dark-btn"}> <i className={"bi bi-mic"}></i></button>
            </div>
            <button className="dark-btn lightbtn" onClick={toggleDarkMode}>
                {darkMode ? (
                    <i className="bi bi-sun-fill"></i>
                ) : (
                    <i className="bi bi-moon-fill"></i>
                )}
            </button>
            <div className="enddiv">
                <button className={"create"}>+</button>
                <button><i className={"bi bi-bell-fill"}></i></button>
                <div className="logoimg">
                    <img src="https://yt3.ggpht.com/-pJGoTzPcIsMCk38HGQdbgek-0G-xbnldKFYyyod7806ZArp2j_aIy6J0Z1KFNkUAzyvLNoaFQ=s88-c-k-c0x00ffffff-no-rj" alt=""/>
                </div>
            </div>
        </div>
    );
}
