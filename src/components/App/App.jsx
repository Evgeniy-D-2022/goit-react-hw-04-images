import React, { Component } from "react";
import getPictures from '../../api';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
// import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Loader from "../Loader/Loader";
// import Modal from "./Modal/Modal";
import Button from "../Button/Button";
import css from './App.module.css';

let page = 1;


class App extends Component {
  state = {
    searchQuery: '',
    pictures: [],
    status: 'idle',
    totalHits: 0,   
  };
  

  handleSubmit = async searchQuery => {
    page = 1;
    if(searchQuery === '') {
      alert('Please enter text');
      return;

    } else {
      try {
        this.setState({ status: 'pending' })
        const { totalHits, hits } = await getPictures(searchQuery, page);
        if (hits.length < 1) {
          this.setState({ status: 'idle' });
          alert('Undifined, Try again');
          this.setState({ status: 'rejected' })
          
        } else {
          this.setState({
            pictures: hits, searchQuery,
            totalHits: totalHits,
            status: 'resolved',
          })
          
        }
      } catch (error) {
        this.setState({ status: 'rejected' });      
    }
    }
  }

  onBtnClick = async() => {
    this.setState({ status: 'pending' })
    try {
      const { hits } = await getPictures(this.state.searchQuery, (page += 1));
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...hits],
        status: 'resolved',
      }))
      
    } catch (error) {
        this.setState({ status: 'rejected' });      
    }
 }

  render() {
    const { totalHits, status, pictures, page } = this.state;

    if (status === 'idle') {
      return (
        <div className={css.app}>
        <Searchbar
        onSubmit={this.handleSubmit}
        />
        </div>
      )
    }
    if (status === 'pending') {
      return (
        <div className={css.app}>
        <Searchbar
        onSubmit={this.handleSubmit}
        />
        
        <ImageGallery page={page} pictures={this.state.pictures}/>
        <Loader/>
        {totalHits > 12 && <Button onClick={this.onBtnClick}/>}
        </div>
      )      
    }
    if (status === 'rejected') {
      return (
        <div className={css.app}>
        <Searchbar
        onSubmit={this.handleSubmit}
        />
        <div className="error">Error</div>
        </div>
      )      
    }
    if (status === 'resolved') {
      return (
        <div className={css.app}>
        <Searchbar
        onSubmit={this.handleSubmit}
        />
        {/* <Loader /> */}
        <ImageGallery page={page} pictures={this.state.pictures}/>
        
        {totalHits > 12 && totalHits > pictures.length && (<Button onClick={this.onBtnClick}/>)}
        </div>
      )          
    }

  }
}

export default App;
