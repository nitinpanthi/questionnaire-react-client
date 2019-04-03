import React from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function Search() {
  return (
    <div className="search_bar">
      <input type="search" name="search" id="search" />
      <button><IoIosSearch /></button>
    </div>
  );
}
