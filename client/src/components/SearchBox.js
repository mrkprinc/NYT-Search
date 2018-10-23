import React from 'react';

const SearchBox = (props) => {
  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='txtTopic'>Topic: </label>
        <input id='txtTopic' type='text'></input>
        <label htmlFor='txtStartDate'>Start Date: </label>
        <input id='txtStartDate' type='text' placeholder='MM/DD/YYYY'></input>
        <label htmlFor='txtEndDate'>End Date: </label>
        <input id='txtEndDate' type='text' placeholder='MM/DD/YYYY'></input>
        <div id='btnSearch' className='button' onClick={props.clickSearch}>Search</div>
      </form>
    </section>
  ) 
}

export default SearchBox;