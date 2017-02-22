import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    }
  }

  updateSearchInput(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  submitForm(event) {
    // prevent the form from reloading the entire page
    event.preventDefault();
    // call the callback with the search value got from the parent component as a prop
    this.props.onSubmit(this.state.searchText);
  }

  render() {
    let searchInputClasses = ["searchInput"];

    if (this.props.searchVisible) {
      searchInputClasses.push("active");
    }

    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <input
          type="search"
         /* value={this.state.searchText}/*needed to make the prop controlled, so we can validate the value*/
          className={searchInputClasses}
          onChange={this.updateSearchInput.bind(this)}
          placeholder="Search ..." />
      </form>
    );
  }
}
SearchForm.propTypes = {
  searchVisible: React.PropTypes.bool,
  onSubmit: React.PropTypes.func.isRequired
}
SearchForm.defaultProps = {
  searchVisible: false,
  onSubmit: () => {console.log('default')} // prevent explosions
}

export default SearchForm;