import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  fetchCategories,
  categoriesUnload
} from "../../actions/categoryActions";
import {
  fetchWorks,
  saveWorkInStore,
  worksUnload
} from "../../actions/workActions";
import CategoryButton from "./../../components/workPage/CategoryButton";
import WorkButton from "./../../components/workPage/WorkButton";
import Spinner from "./../../components/partials/Spinner";

class CategoryList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filter: ""
    };

    this.props.fetchCategories();
    this.props.fetchWorks();
  }

  componentWillUnmount() {
    this.props.categoriesUnload();
    this.props.worksUnload();
  }

  getFilterCallback = category => {
    this.setState({ filter: category });
  };

  getWorkCallback = work => {
    this.props.saveWorkInStore(work);
  };

  renderCategories() {
    const { categories } = this.props;
    if (categories) {
      return categories.map(category => {
        return (
          <CategoryButton
            key={category._id}
            category={category}
            getFilterCallback={category => this.getFilterCallback(category)}
          />
        );
      });
    }
  }

  renderFilteredWorksBtn = () => {
    const { works } = this.props;
    let btnsFiltered;

    if (works) {
      if (this.state.filter !== "") {
        btnsFiltered = this.filterWorkBtns(works);
      } else {
        btnsFiltered = works;
      }

      return btnsFiltered.map(work => {
        return (
          <WorkButton
            key={work._id}
            work={work}
            getWorkCallback={work => this.getWorkCallback(work)}
          />
        );
      });
    }
  };

  filterWorkBtns = workList => {
    return workList.filter(work => {
      if (work.category === this.state.filter) return true;
      else return false;
    });
  };

  render() {
    const { isFetchingCategories } = this.props;

    if (isFetchingCategories) {
      return <Spinner />;
    }

    return (
      <div className="categoryWorkList row">
        <div className="col-lg-12">
          <div className="row">
            <div className="category">
              <h6>Filtres / Catégories</h6>
              {this.renderCategories()}
            </div>
          </div>
          <div className="row">
            <div className="workList">
              <h6>Afficher une création</h6>
              {this.renderFilteredWorksBtn()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.categories,
    isFetchingCategories: state.category.isFetchingCategories,
    works: state.work.workList
  };
};

export default connect(mapStateToProps, {
  fetchCategories,
  fetchWorks,
  saveWorkInStore,
  worksUnload,
  categoriesUnload
})(CategoryList);
