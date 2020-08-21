import React from 'react';
import Slider from '@material-ui/core/Slider';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from "react-transition-group";
import HoverTip from "./HoverTip";
import data from "../data"

const ContinuousSlider = props => {

  let historyLeft = ((props.locationState.lastKnownPage * 100)/260)-0.6

  const handleHoverTip = (e) =>{
    let id= e.target.id.split("-")[1]
    let tip = document.querySelector('#tip-'+id)
    if (tip.getAttribute('hidden') != null){
        tip.removeAttribute('hidden')
    }else{
        tip.setAttribute('hidden','')
    }
  }

  return (
    <div>
          <div className="marks-bar">
              <button onClick={props.goToPage} className="history-button" style={{'left':historyLeft+'%'}}></button>
              <TransitionGroup>
              {
                data.bookmarks.map((mark, i) => {
                    let markLeft = `${((mark * 100)/260)-0.6}%`;
                    return (
                        <CSSTransition
                        key={mark}
                        timeout={300}
                        classNames="bookmark-animated"
                        >
                            <button id={'bookmark-' + mark} onClick={props.goToPage} onMouseEnter={handleHoverTip} onMouseLeave={handleHoverTip} className="bookmark" style={{'left':markLeft}}></button>
                        </CSSTransition>
                )
                })
              }
              </TransitionGroup>
              {
                  data.bookmarks.map((mark, i) => {
                        return (
                            <HoverTip id={mark} type="bookmark"/>
                        )
                    })
              }
              {
                data.chapters.map((chapter, i) => {
                    let chapterLeft = `${((chapter* 100)/260)-0.6}%`;
                    return (
                        <div id={'chapter-' + chapter} key={chapter} className="chapter" style={{'left':chapterLeft}} onMouseEnter={handleHoverTip} onMouseLeave={handleHoverTip}></div>
                    )
                })
              }
              {
                data.chapters.map((chapter, i) => {
                    return (
                        <HoverTip id={chapter} type="chapter"/>
                    )
                })
              }
          </div>
          <Slider value={props.value} min={1} max={260} onChange={props.goToPage} onChangeCommitted={props.goToPage} />
    </div>
  );
}

export default ContinuousSlider;
