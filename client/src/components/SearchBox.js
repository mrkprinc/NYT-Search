import React from 'react';

const SearchBox = (props) => {
  return (
    <section id='searchBox'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='txtTopic'>Topic: </label>
          <input id='txtTopic' type='text'></input>
        </div>

        <div>
          <label htmlFor='txtStartDate'>Start Date: </label>
          <input id='txtStartDate' type='text' placeholder='YYYYMMDD'></input>
        </div>

        <div>
          <label htmlFor='txtEndDate'>End Date: </label>
          <input id='txtEndDate' type='text' placeholder='YYYYMMDD'></input>
        </div>

        <div>
          <span id='btnSearch' className='button' onClick={props.clickSearch}>Search</span>
        </div>
      </form>
    </section>
  ) 
}

export default SearchBox;