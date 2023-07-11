import React, { useState, useEffect } from "react";
// import React, {Component} from "react";
import getPictures from '../../api';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import css from './App.module.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPictures, setTotalPictures] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
    
useEffect(()=>  {
  if (!searchQuery) return;
  const getPicture = async () => {
    setLoading(true);
    try {
      const { totalHits, hits } = await getPictures(searchQuery, page);
      setPictures(prevPicture => 
        page ===1 ? hits : [...prevPicture, ...hits]
        );
        setTotalPictures(totalHits);
    } catch (error) {
      setError(error);
      } finally {
        setLoading(false);
      }
  };
  getPicture();
},
[searchQuery,page]);

const handleSubmit = value => {
  if (value === searchQuery) {
    alert(`Image of ${value} are already displayed`)
    return;
    } else if(value==='') {
      alert(`Please enter text`)
      return;
    }
    setSearchQuery(value);
    setPictures([]);
    setPage(1);
    setError(null);
    setLoading(true);

}

  const onBtnClick = () => {
   setPage(prevPage=> prevPage+1)
  };
     
 
      return (
        <div className={css.app}>
<Searchbar onSubmit={handleSubmit} />
{totalPictures === 0 && (<div className={css.error_text}>{'Try again'}</div>)}
{error && <div className={css.error_text}>{error}</div>}
{pictures.length !== 0 && searchQuery !== '' && (
  <>
    <ImageGallery pictures={pictures} />
    {loading && <Loader />}
    {pictures.length >= 12 ? (
      <Button onClick={onBtnClick} />
    ) : (
      <div className={css.error_text}>Image ended</div>
    )}
  </>
)}
    {loading && <Loader />}
</div>
);
};

     
 
export default App;
