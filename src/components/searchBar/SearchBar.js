import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar( { setLocationHandler }) {
    const [query, setQuery] = useState('');

const handleClick = () => {
    setLocationHandler(query);
}

const keyPressCheck = (e) => {
    if (e.keyCode === 13) {
        setLocationHandler(query);
    }
}

    return (
        <span className="searchbar">
      <input
          type="text"
          name="search"
          value={query}
          onKeyDown={keyPressCheck}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoek een stad in Nederland"
      />

      <button type="button"
              onClick={setLocationHandler}
      >
        Zoek
      </button>
    </span>
    );
};

export default SearchBar;
