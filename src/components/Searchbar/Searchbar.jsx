import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onChangeInput = e => {
    this.setState({ inputValue: e.target.value.trim().toLowerCase() });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' })
  }


  render () {

    return (
      <header className={css.searchbar}>
  <form className={css.SearchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={css.SearchForm_button}>
      <FaSearch size={25}/>
    </button>

    <input
      className={css.SearchForm_input}
      type="text"
      name='inputValue'
      value={this.state.inputValue}
      onChange={this.onChangeInput}
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>

    )
  }
};

export default Searchbar;

Searchbar.propType = {
  onSubmit: PropTypes.func,
};

