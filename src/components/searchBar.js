import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {

  handleFormSubmit = function({query}) {
    console.log("trying to handle submit for query", query);
    //navigate to a new route
  }

  rednerInput(field) {
    return <input type="text" placeholder="Search DailySmarty" {...field.input} />
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="serach-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
        <Field name="query" component={this.rednerInput} />
      </form>
    );
  }
}

SearchBar = reduxForm({
  form: 'searchBar'
})(SearchBar);

export default SearchBar;