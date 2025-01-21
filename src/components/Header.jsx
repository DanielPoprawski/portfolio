import { Link } from "react-router";

export default function Header() {
      return (
            <div className="header">
                  <Link to="/">
                        <button className="big-button">
                              <span>HOME</span>
                        </button>
                  </Link>
                  <Link to="/about">
                        <button className="big-button">
                              <span>ABOUT</span>
                        </button>
                  </Link>
                  <Link to="/contact">
                        <button className="big-button">
                              <span>CONTACT</span>
                        </button>
                  </Link>
            </div>
      );
}
