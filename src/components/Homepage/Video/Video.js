
import "../Video/Video.css";
import video from '../Video/videos.mp4';
import BestSeller from "../BestSeller/BestSeller";

const Video = () => {
  return (
    <>

      <div className="videohap">
        <h2>What's Happening</h2>
      </div>
      <div className="home-video">
        <video width="100%" height="100%" autoPlay muted loop className="home-videos">
          <source src={video} type="video/mp4" />

        </video>
      </div>
      <BestSeller/>


    </>
  )
}

export default Video;
