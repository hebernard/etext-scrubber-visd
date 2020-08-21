import React from 'react';

const PageNavigation = props => {
    return(
      <div className="page-nav">
        <button className={"page-nav-left page-" + props.locationState.previousPage} onClick={props.goToPage}>
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#252525"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
            <span>Page {props.locationState.previousPage}</span>
        </button>
        <button className={"page-nav-right page-" + props.locationState.nextPage} onClick={props.goToPage}>
            <span>Page {props.locationState.nextPage}</span>
            <svg focusable="false" viewBox="0 0 25 25" aria-hidden="true" width="25" height="25">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" fill="#252525"></path>
            </svg>
        </button>
      </div>
    );
}

export default PageNavigation;
