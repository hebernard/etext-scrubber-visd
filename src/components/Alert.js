import React from 'react';

const DisplaySettings = props => {

    if(props.displayState.alert == true){
    return(
      <div class="menu alert">
          <p>{props.displayState.alertText}</p>
          <button onClick={props.closeAlert}>
            <svg focusable="false" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 7.182L15.805.377a1.286 1.286 0 0 1 1.818 1.818L10.818 9l6.805 6.805a1.286 1.286 0 1 1-1.818 1.818L9 10.818l-6.805 6.805a1.286 1.286 0 1 1-1.818-1.818L7.182 9 .377 2.195A1.286 1.286 0 1 1 2.195.377L9 7.182z"></path></svg>
          </button>
      </div>
    )}else{
        return null
    }
}

export default DisplaySettings;
