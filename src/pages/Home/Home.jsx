import React, { useEffect, useRef, useState } from "react";
import Loader from "../../Component/Loader/Loader.jsx";
import VideoCard from "../../Component/VideoAbout/VideoCard.jsx";
import shortss from '../../assets/img.png';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import "./Home.css";

export const Home = () => {
    const categories = [
        "All", "Music", "Mixes", "News", "Gaming", "Reverberation",
        "Live", "Comedy clubs", "Funk", "Hip hop", "Deep House", "Sketch comedy", "Art"
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const shortsRef = useRef(null);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            const fakeData = Array.from({ length: 12 }, (_, index) => ({
                id: `video${index}`,
                snippet: {
                    title: `React Vite YouTube Clone #${index + 1}`,
                    channelTitle: "Shoxjahon Dev",
                    thumbnails: {
                        high: { url: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg" },
                        default: { url: "https://i.pravatar.cc/40" },
                    },
                },
            }));

            const extraVideos = JSON.parse(localStorage.getItem("yourVideos")) || [];
            const extraFormatted = extraVideos.map((vid, i) => ({
                id: `userAdded-${i}`,
                snippet: {
                    title: vid.about,
                    channelTitle: "Added by Admin",
                    thumbnails: {
                        high: { url: vid.img },
                        default: { url: "https://i.pravatar.cc/40" },
                    },
                }
            }));

            setVideos([...fakeData, ...extraFormatted]);
            setLoading(false);
        }, 1000);
    }, [selectedCategory]);

    const shorts = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        img: shortss,
        about: "With this video you can make a lot of protein",
        views: "1.8M views",
    }));

    const scrollShorts = (direction) => {
        const container = shortsRef.current;
        if (!container) return;

        const cardWidth = container.offsetWidth * 0.2 + 16;
        const scrollAmount = cardWidth * 4;

        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="home-page">
            <div className="category-bar">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="video-list">
                {loading ? (
                    <Loader />
                ) : (
                    videos.map((vid) => <VideoCard key={vid.id} video={vid} />)
                )}
            </div>

            <div className="shorts-section">
                <h3 className="shorts-title">Shorts</h3>
                <div className="shorts-wrapper">
                    <button className="scroll-btn left" onClick={() => scrollShorts("left")}>
                        <BiChevronLeft size={32} />
                    </button>

                    <div className="shorts-carousel" ref={shortsRef}>
                        {shorts.map((short) => (
                            <div key={short.id} className="short-card">
                                <img src={short.img} alt="Short thumbnail" />
                                <p className="short-about">{short.about}</p>
                                <span className="short-views">{short.views}</span>
                            </div>
                        ))}
                    </div>

                    <button className="scroll-btn right" onClick={() => scrollShorts("right")}>
                        <BiChevronRight size={32} />
                    </button>
                </div>
            </div>
        </div>
    );
};
