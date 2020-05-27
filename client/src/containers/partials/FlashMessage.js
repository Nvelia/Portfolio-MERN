import React, { PureComponent } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { deleteFlashMessage } from "../../actions/flashMessageActions";

class FlashMessage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: null
    };
  }

  componentDidMount() {
    this.deleteFlashTag();
  }

  componentDidUpdate() {
    this.deleteFlashTag();
  }

  deleteFlashTag = () => {
    if (this.state.message !== null) {
      setTimeout(() => {
        this.props.deleteFlashMessage();
      }, 3000);
    }
  };

  static getDerivedStateFromProps(props, state) {
    let message = null;
    if (props.messages.length !== 0 && state.message !== props.messages) {
      message = props.messages[0];
    }

    return { message };
  }

  onClick = () => {
    this.props.deleteFlashMessage();
  };

  render() {
    return (
      <div>
        {this.state.message ? (
          <div
            className={classnames("alert", {
              "alert-success": this.state.message.type === "success",
              "alert-warning": this.state.message.type === "warning",
              "alert-danger": this.state.message.type === "error"
            })}
          >
            <button onClick={this.onClick} className="close">
              <span>&times;</span>
            </button>
            {this.state.message.text}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.flashMessages
  };
};

export default connect(
  mapStateToProps,
  { deleteFlashMessage }
)(FlashMessage);
