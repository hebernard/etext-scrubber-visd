import React from 'react';

const Search = props => {
    if(props.displayState.search == true) {
        return (
            <div className="search-container" id="search">
                <div className="search-panel">
                    <button onClick={props.displayStateHandler} aria-controls="search">
                        <svg focusable="false" viewBox="0 0 18 18" aria-hidden="true">
                            <path d="M9 7.182L15.805.377a1.286 1.286 0 0 1 1.818 1.818L10.818 9l6.805 6.805a1.286 1.286 0 1 1-1.818 1.818L9 10.818l-6.805 6.805a1.286 1.286 0 1 1-1.818-1.818L7.182 9 .377 2.195A1.286 1.286 0 1 1 2.195.377L9 7.182z"></path>
                        </svg>
                    </button>
                    <span class="search-label grey">Search</span>
                    <form>
                        <label hidden for="search-by"></label>
                        <select id="search-by">
                            <option>All (127)</option>
                            <option>Figures (2)</option>
                            <option>Glossary (15)</option>
                            <option>Content (108)</option>
                            <option>Videos (2)</option>
                        </select>
                        <label hidden for="search-field"></label>
                        <input id="search-field" type="text" placeholder="Search for text, chapters, terms, videos, or images"/>
                    </form>
                </div>
                <div className="overlay"></div>
            </div>
        );
    }else{
        return null
    }
}

export default Search;
