import React from 'react';
import {connect} from 'react-redux';
import './_dashboard-container.scss';
// scss keeps breaking  my test event wiht the hack

import { categoryCreate, categoryUpdate,categoryDelete}
  from '../../action/category-action.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {

  render(){
    return (
      <div>
        <main className='dashboard-container'>
          <h2> Budgeting Tool </h2>
          <CategoryForm
            className='cat-form'
            buttonText='new category'
            onComplete={this.props.categoryCreate} />


        </main>
        <div className='category-list'>
          {this.props.categorys.map((item) =>
            <CategoryItem
              category={item}
              key={item.id} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categorys:state.categorys,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer);
