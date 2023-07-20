import "./FixedMenu.css";
import facebookImg from "../../Assets/images/facebook.png";
import youtubeImg from "../../Assets/images/youtube.png";
import tikTokImg from "../../Assets/images/tik-tok.png";
import instagramImg from "../../Assets/images/instagram.png";
import chatImg from "../../Assets/images/live-chat.png";

const FixedMenu = () => {
    return (
    <div className="fixed-menu">
        <div className="vertical-fixed-block">
            <a href="https://www.facebook.com/wix" target="_blank" rel="next">
            <img src={facebookImg} alt="facebook"/>
            </a>
            <a href="https://www.youtube.com/user/Wix" target="_blank">
            <img src={youtubeImg} alt="youtube" />
            </a>
            <a href="https://www.tiktok.com/@wix?" target="_blank">
            <img src={tikTokImg} alt="tik-tok"/>
            </a>
            <a href="https://www.instagram.com/wix/" target="_blank">
            <img src={instagramImg} alt="instagram"/>
            </a>
        </div>
        <div className="horizontal-fixed-block">
            <img src={chatImg} alt="chat"/>
            <p>Support's Help!</p>
        </div>
    </div>
    )

}
export default FixedMenu;