import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import WorkListItem from "./WorkListItem";
import { fetchWorks, deleteWork, worksUnload } from "../../actions/workActions";
import { addFlashMessage } from "../../actions/flashMessageActions";

class WorkList extends PureComponent {
  componentDidMount() {
    this.props.fetchWorks();
  }

  componentWillUnmount() {
    this.props.worksUnload();
  }

  renderWorks() {
    const { works } = this.props;
    if (works) {
      return works.map((work) => {
        return (
          <WorkListItem
            key={work._id}
            work={work}
            deleteWorkCallBack={(work) => this.deleteWorkCallBack(work)}
          />
        );
      });
    }
  }

  deleteWorkCallBack(work) {
    this.props.deleteWork(work._id);
    this.props.addFlashMessage({
      type: "warning",
      text: "Création supprimée.",
    });
  }

  render() {
    return (
      <div className="container mb-5 admin-work-page">
        <div className="row justify-content-center">
          <h3>Works</h3>
        </div>
        <table className="table table-sm mt-4 table-work">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th colSpan="2" className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{this.renderWorks()}</tbody>
        </table>
        <Link
          className="btn btn-primary btn-lg btn-raised btn-block add-btn"
          to="/administration/work-form"
        >
          Add Work
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    works: state.work.workList,
  };
};

export default connect(mapStateToProps, {
  fetchWorks,
  deleteWork,
  addFlashMessage,
  worksUnload,
})(WorkList);
