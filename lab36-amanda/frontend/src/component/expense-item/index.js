import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';
import Draggable from '../draggable';
import {renderIf} from '../../lib/util.js';
import {expenseUpdate, expenseDelete} from '../../action/expense-action.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      editing:false,
    };

    this.handleExpenseUpdate = this.handleExpenseUpdate.bind(this);
  }
  handleExpenseUpdate(expense){
    this.props.expenseUpdate(expense);
    this.setState({editing:false});
  }
  render(){
    let {expense, expenseDelete, expenseUpdate} = this.props;

    return (
      <li className='expense-item'>
        <Draggable dataTransferItem={expense}>
          {renderIf(!this.state.editing,
            <div onDoubleClick={() => this.setState({editing: true})}>
              <p> {expense.content} </p>

              <button onClick={() => expenseDelete(expense)}>delete </button>
            </div>
          )}

          {renderIf(this.state.editing,
            <div>
              <ExpenseForm
                expense={expense}
                buttonText='update expense'
                onComplete={expenseUpdate}
              />

              <button
                onClick={() => this.setState({editing: false})}>

            cancel
              </button>
            </div>
          )}
        </Draggable>
      </li>
    );
  }
}

let mapStateToProps= () => ({});
let mapDispatchToProps = (dispatch) => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ExpenseItem);
