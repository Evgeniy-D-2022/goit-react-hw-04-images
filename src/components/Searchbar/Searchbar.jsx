import React, { useState } from "react";
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';

const Searchbar=({onSubmit}) => {
  const [inputValue, setInputValue] = useState('')

  const onChangeInput = e => {
    setInputValue(e.target.value.trim().toLowerCase());
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  }

    return (
      <header className={css.searchbar}>
  <form className={css.SearchForm} onSubmit={handleSubmit}>
    <button type="submit" className={css.SearchForm_button}>
      <FaSearch size={25}/>
    </button>

    <input
      className={css.SearchForm_input}
      type="text"
      name='inputValue'
      value={inputValue}
      onChange={onChangeInput}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>

    )
  };

// class Searchbar extends Component {
//   state = {
//     inputValue: '',
//   };

//   onChangeInput = e => {
//     this.setState({ inputValue: e.target.value.trim().toLowerCase() });
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.inputValue);
//     this.setState({ inputValue: '' })
//   }


//   render () {

//     return (
//       <header className={css.searchbar}>
//   <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//     <button type="submit" className={css.SearchForm_button}>
//       <FaSearch size={25}/>
//     </button>

//     <input
//       className={css.SearchForm_input}
//       type="text"
//       name='inputValue'
//       value={this.state.inputValue}
//       onChange={this.onChangeInput}
//       autoComplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>

//     )
//   }
// };

export default Searchbar;

Searchbar.propType = {
  onSubmit: PropTypes.func,
};

