import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "./Component/Navbar/Navbar.jsx";
import { Home } from "./pages/Home/Home.jsx";
import Channel from "./pages/ChannelPage/Channel.jsx";
import { Sidebar } from "./Component/SideBar/Sidebar.jsx";
import './App.css';
import Loader from "./Component/Loader/Loader.jsx";
import Admin from "./Component/Admin/Admin.jsx";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    return (
        <Router>
            <div className={`app-container ${darkMode ? "dark" : "light"}`} style={{ display: "flex" }}>
                <Sidebar />
                <div className="main-content" style={{ flex: 1 }}>
                    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/channel/:id" element={<Channel />} />
                        <Route path={"/admin"} element={<Admin />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
