import { useState } from "react";
import { FaHome, FaBars } from "react-icons/fa";
import { PiVideoBold } from "react-icons/pi";
import { MdSubscriptions } from "react-icons/md";
import { HiHandThumbUp } from "react-icons/hi2";
import "./SideBar.css";
import {Link} from "react-router-dom";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="world">
                <div className="logo">
                    <button style={{width:'auto'}} className="toggle-btn" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                    <img style={{marginLeft:'15%'}}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/YouTube_Music_short_logo_with_white_wordmark.svg/1200px-YouTube_Music_short_logo_with_white_wordmark.svg.png"
                        alt="logo"
                    />
                </div>
                <button className="toggle-btn">
                    <FaHome />
                    {isOpen && <span><Link to={"/"}>Home</Link></span>}
                </button>
                <button className="toggle-btn">
                    <PiVideoBold />
                    {isOpen && <span>Shorts</span>}
                </button>
                <button className="toggle-btn">
                    <MdSubscriptions />
                    {isOpen && <span>Subscriptions</span>}
                </button>
            </div>
            <div className="yourchannel">
                <h2>You</h2>
                <button className="toggle-btn">
                    <i className="bi bi-clock-history"></i>
                    {isOpen && <span>History</span>}
                </button>
                <button className="toggle-btn">
                    <MdSubscriptions />
                    {isOpen && <span><Link to={"/admin"}>Your Videos</Link></span>}
                </button>
                <button className="toggle-btn">
                    <MdSubscriptions />
                    {isOpen && <span>Watch Later</span>}
                </button>
                <button className="toggle-btn">
                    <HiHandThumbUp />
                    {isOpen && <span>Liked Videos</span>}
                </button>
            </div>
            <div className="subscriptions">
                <h4>Your Subscriptions</h4>
                <h1>None</h1>
            </div>
        </div>
    );
};
