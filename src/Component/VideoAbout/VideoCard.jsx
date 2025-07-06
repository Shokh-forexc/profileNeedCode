import React from "react";
import { Link } from "react-router-dom";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
    const { id, snippet } = video;

    return (
        <div className="video-card">
            <Link to={`/video/${id}`}>
                <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} className="thumbnail" />
            </Link>

            <div className="video-info">
                <div className="channel-img">
                    <img src={snippet?.thumbnails?.default?.url} alt="channel" />
                </div>
                <div className="video-details">
                    <h4 className="title">{snippet?.title}</h4>
                    <p className="channel">{snippet?.channelTitle}</p>
                    <p className="meta">1.2M views • 2 days ago</p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
