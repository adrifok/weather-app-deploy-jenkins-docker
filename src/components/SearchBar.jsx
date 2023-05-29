import React from 'react';
import {BiSearchAlt, BiBuildingHouse} from 'react-icons/bi';

import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  
  return (
    <form 
    className={style.searchBar}
    onSubmit= {(e)=>{
      e.preventDefault();

      const input = document.getElementById('cityInput');
      onSearch(input.value);
      input.value ='';
    }} >

      <BiBuildingHouse className= {style.icon} />
      <input id= 'cityInput' className={style.input} placeholder='City...'/>
      <button className={style.submit} type='submit' value = 'Add'>
      <BiSearchAlt/>
      </button>
  </form>
  );
};