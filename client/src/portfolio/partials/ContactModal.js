import React, { Component } from "react";
import { connect } from "react-redux";

import { modalUnload } from "../../actions/modalActions";

class ContactModal extends Component {
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node && this.node.contains(e.target)) {
      return;
    }

    this.handleClickOutside();
  };

  handleClickOutside = () => {
    this.props.modalUnload();
  };

  changePageCallBack = () => {
    this.setState({ loginPage: !this.state.loginPage });
  };

  closeModal = () => {
    this.props.modalUnload();
  };

  render() {
    return (
      <div className="contact-modal" ref={(node) => (this.node = node)}>
        <button
          onClick={() => this.props.modalUnload()}
          className="modal-close-btn"
        >
          &times;
        </button>

        <h3>Contact</h3>

        <p className="contact-links">
          <i className="far fa-envelope"></i> E-mail:{" "}
          <a href="mailto:nicolas.velia.ji@gmail.com">
            {" "}
            nicolas.velia.ji@gmail.com
          </a>{" "}
          <br />
          <i className="fab fa-linkedin"></i> LinkedIn :{" "}
          <a href="www.linkedin.com/in/nicolas-velia">
            www.linkedin.com/in/nicolas-velia
          </a>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  modalUnload,
};

export default connect(null, mapDispatchToProps)(ContactModal);
