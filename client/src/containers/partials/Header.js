import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import LoginForm from "./auth/LoginForm";
import LoggedMenu from "../../components/partials/auth/LoggedMenu";
import classnames from "classnames";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homepage: false,
      workpage: false,
      skillpage: false,
      isPanelOpened: false
    };

    document.addEventListener("mousedown", this.handleClickOutside, false);
  }

  renderLoginForm = () => {
    if (this.props.isLoggedIn) {
      return <LoggedMenu />;
    } else {
      return (
        <li>
          <button onClick={this.handleLoginClick}>Connexion</button>
        </li>
      );
    }
  };

  componentWillMount = () => {
    switch (this.props.location.pathname) {
      case "/":
        this.setState({ homepage: true, workpage: false, skillpage: false });
        break;
      case "/creations":
        this.setState({ homepage: false, workpage: true, skillpage: false });
        break;
      case "/competences":
        this.setState({ homepage: false, workpage: false, skillpage: true });
        break;
      default:
        break;
    }
  };

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside, false);
  }

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState(state => ({
        isPanelOpened: false
      }));
    }
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleLoginClick = () => {
    this.setState({
      isPanelOpened: !this.state.isPanelOpened
    });
  };

  render() {
    const loginPanel = <LoginForm />;
    return (
      <Fragment>
        <nav className="navMenu navbar navbar-expand-lg">
          <button
            className="navbar-toggler btnMenu"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i> Menu
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li
                className={classnames("nav-item", {
                  active: this.state.homepage
                })}
              >
                <Link to="/">Présentation</Link>
              </li>
              <li
                className={classnames("nav-item", {
                  active: this.state.workpage
                })}
              >
                <Link to="/creations">Créations</Link>
              </li>
              <li
                className={classnames("nav-item", {
                  active: this.state.skillpage
                })}
              >
                <Link to="/competences">Compétences / Parcours</Link>
              </li>

              {this.renderLoginForm()}
            </ul>
          </div>
        </nav>
        <div ref={this.setWrapperRef}>
          {this.state.isPanelOpened ? loginPanel : null}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default withRouter(connect(mapStateToProps, null)(Header));
