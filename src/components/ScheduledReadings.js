import React from 'react';
import Calendar from "./Calendar";

const ScheduledReadings = props => {

    if(props.displayState.scheduledReadings == true){
    return(
      <div class="sched-readings-container" id="scheduledReadings">
          <div className="sched-readings-panel">
            <button className="close" onClick={props.displayStateHandler} aria-controls="scheduledReadings">
                <svg focusable="false" viewBox="0 0 18 18" aria-hidden="true">
                    <path d="M9 7.182L15.805.377a1.286 1.286 0 0 1 1.818 1.818L10.818 9l6.805 6.805a1.286 1.286 0 1 1-1.818 1.818L9 10.818l-6.805 6.805a1.286 1.286 0 1 1-1.818-1.818L7.182 9 .377 2.195A1.286 1.286 0 1 1 2.195.377L9 7.182z"></path>
                </svg>
            </button>
            <p className="large center">Scheduled Readings</p>
            <Calendar/>
          </div>
          <div className="overlay"></div>
      </div>
    )}else{
        return null
    }
}

export default ScheduledReadings;
