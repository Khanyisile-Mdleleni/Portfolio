import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  closeNavbar = () => {
    if (this.state.clicked) {
      this.setState({ clicked: false });
    }
  };

  render() {
    return (
      <nav className="stroke">
        <Link to="/" className="title">
          {" "}
          K || M
        </Link>

        <ul
          id="navbar"
          className={this.state.clicked ? "navbar active" : "navbar"}
        >
          <li>
            <Link to="/home" className="active" onClick={this.closeNavbar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={this.closeNavbar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={this.closeNavbar}>
              Qualifications
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={this.closeNavbar}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={this.closeNavbar}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={this.closeNavbar}>
              Contact Me
            </Link>
          </li>
        </ul>
        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bars"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Header;
