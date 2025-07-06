// Channel.jsx
import { useParams } from "react-router-dom";
import { video } from "../../data/Video";
import "../ChannelPage/Channel.css";

function Channel() {
    const { id } = useParams();

    const channelVideos = video.filter(video => video.channel === id);

    return (
        <div className="channel-page">
            <h2 className="channel-title">{id} kanali</h2>

            <div className="channel-videos">
                {channelVideos.length > 0 ? (
                    channelVideos.map((video) => (
                        <div key={video.id} className="channel-video-card">
                            <img src={video.thumbnail} alt={video.title} />
                            <h3>{video.title}</h3>
                            <p>{video.views} • {video.time}</p>
                        </div>
                    ))
                ) : (
                    <p>Bu kanalga tegishli videolar topilmadi.</p>
                )}
            </div>
        </div>
    );
}

export default Channel;
