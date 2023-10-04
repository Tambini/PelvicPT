import instagram from "../assets/Instagram.png";
import email from "../assets/email.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="iconsImages">
        {/* <a href="https://www.facebook.com/KeensSteakhouse/">
        <img className="icon" src={facebook}></img>
      </a> */}
        <a href="https://www.instagram.com/pelvicptrehab/">
          <img className="icon" src={instagram}></img>
        </a>
        <a href="/">
          <img className="iconEmail" src={email}></img>
        </a>
        <a href="mailto:info@pelvicptrehab.com?body=hi">
          <img className="icon" src={email}></img>
        </a>
      </div>

      <a href="#top">
        <div id="backToTop">
          <h2>Top</h2>
        </div>
      </a>
    </div>
  );
};

export default Footer;
