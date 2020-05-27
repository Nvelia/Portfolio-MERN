import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  fetchCategories,
  deleteCategory,
  categoriesUnload
} from "../../../actions/categoryActions";
import CategoryListItem from "../../../components/admin/Category/CategoryListItem";
import { Link } from "react-router-dom";
import { addFlashMessage } from "./../../../actions/flashMessageActions";

class CategoryList extends PureComponent {
  componentDidMount() {
    this.props.fetchCategories();
  }

  componentWillUnmount() {
    this.props.categoriesUnload();
  }

  renderCategories() {
    const { categories } = this.props;
    if (categories) {
      return categories.map(category => {
        return (
          <CategoryListItem
            key={category._id}
            category={category}
            deleteCategoryCallBack={category =>
              this.deleteCategoryCallBack(category)
            }
          />
        );
      });
    }
  }

  deleteCategoryCallBack(category) {
    this.props.deleteCategory(category._id);
    this.props.addFlashMessage({
      type: "warning",
      text: "Catégorie supprimée"
    });
  }

  render() {
    return (
      <div className="col-lg-6">
        <div className="row justify-content-center">
          <h3>Catégories</h3>
        </div>
        <table className="table table-sm mt-4 table-category">
          <thead>
            <tr>
              <th scope="col">Catégorie</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderCategories()}</tbody>
        </table>

        <Link
          className="btn btn-primary btn-lg btn-raised btn-block"
          to="/administration/ajouter-categorie"
        >
          Ajouter une catégorie
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.categories,
    categoriesFetching: state.category.isFetching
  };
};

export default connect(mapStateToProps, {
  fetchCategories,
  deleteCategory,
  addFlashMessage,
  categoriesUnload
})(CategoryList);
