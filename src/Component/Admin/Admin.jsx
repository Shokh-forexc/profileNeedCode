import './Admin.css';
import React, { useState, useEffect } from 'react';

export const Dashboard = () => (
    <div className="dashboard">
        <div className="total">
            <div className="thirddiv">
                <h3>120.456$</h3>
                <div className="flex-div">
                    <h5>Active Deal</h5>
                    <span>
                        <button>+20%</button> last month
                    </span>
                </div>
            </div>
            <div className="thirddiv">
                <h3>120.456$</h3>
                <div className="flex-div">
                    <h5>Revenue Total</h5>
                    <span>
                        <button>+9.0%</button> last month
                    </span>
                </div>
            </div>
            <div className="thirddiv">
                <h3>120.456$</h3>
                <div className="flex-div">
                    <h5>Closed Deals</h5>
                    <span>
                        <button>+4.5%</button> last month
                    </span>
                </div>
            </div>
        </div>
    </div>
);

const Admin = () => {
    const [activePage] = useState("dashboard");
    const [videos, setVideos] = useState([]);
    const [imgUrl, setImgUrl] = useState("");
    const [about, setAbout] = useState("");

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("yourVideos")) || [];
        setVideos(stored);
    }, []);

    const handleAddVideo = (e) => {
        e.preventDefault();
        if (!imgUrl || !about) return;

        const newVideo = { img: imgUrl, about };
        const updatedVideos = [...videos, newVideo];

        setVideos(updatedVideos);
        localStorage.setItem("yourVideos", JSON.stringify(updatedVideos));

        setImgUrl("");
        setAbout("");

        const modal = window.bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal'));
        modal.hide();
    };

    const renderContent = () => {
        switch (activePage) {
            case "dashboard": return <Dashboard />;
            default: return null;
        }
    };

    return (
        <div className="admin">
            <div className="leftbar">
                {renderContent()}
                <div className="yourvideos">
                    <div className="add">
                        <h2>Your videos</h2>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            +
                        </button>
                    </div>

                    <div className="videos-list">
                        {videos.map((item, index) => (
                            <div key={index} className="video-item" style={{ marginBottom: '20px' }}>
                                <img src={item.img} alt="video" />
                                <p>{item.about}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form onSubmit={handleAddVideo}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Video</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Image URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={imgUrl}
                                        onChange={(e) => setImgUrl(e.target.value)}
                                        placeholder="https://example.com/image.jpg"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">About</label>
                                    <textarea
                                        className="form-control"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                        rows="3"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Add Video</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;
