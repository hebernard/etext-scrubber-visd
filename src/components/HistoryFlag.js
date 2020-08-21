import React from 'react';

const HistoryFlag = props => {
    return(
        <div className={'history-flag ' + props.direction} onClick={props.goToPage}>
          <img className="arrow-left" src={process.env.PUBLIC_URL + '/images/history-light.svg'}></img>
          <p>Page {props.locationState.lastKnownPage}</p>
          <img className="arrow-right" src={process.env.PUBLIC_URL + '/images/history-light.svg'}></img>
        </div>
    );
}

export default HistoryFlag;
