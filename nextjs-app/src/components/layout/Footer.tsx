import "./footer.css"
import { XIcon, TelegramIcon, LinkedInIcon } from "../icons";
export const Footer = () => {
    return (
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_icon">
          <li>
            <a href="#">
              <XIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <TelegramIcon />
            </a>
          </li>
        </ul>

        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <p>&copy; {new Date().getFullYear()} ABC | All Rights Reserved</p>
      </footer>
    );
}