import React from 'react';
import ContinuousSlider from "./ContinuousSlider";
import PagePopUp from "./PagePopUp";


const Footer = props => {

  let value = props.locationState.currentPage;

  const [left, setLeft] = React.useState(0);


  const getLeft = () => {
      let distanceLeft = document.querySelector('.MuiSlider-track').offsetWidth;
      let totalDistance = document.querySelector('.MuiSlider-rail').offsetWidth;
      if(totalDistance - distanceLeft < 60){
        setLeft(distanceLeft - 50)
      }else {
        setLeft(distanceLeft + 25)
      }
  }


  React.useEffect(getLeft);
  window.onresize = getLeft;


  return (
    <footer>
        <PagePopUp locationState={props.locationState} left={left} pagePopUp={props.pagePopUp} tempBookmark={props.tempBookmark}/>
        <button onClick={props.goToPage} className={"small-arrow page-nav-left page-" + props.locationState.previousPage}>
        </button>
        <form className="input-form" onSubmit={props.goToPage}>
            <input type="text" min={1} max={55} defaultValue={1} onFocus={props.onFocus} onBlur={props.onBlur}/>
        </form>
        <button onClick={props.goToPage} className={"small-arrow turned page-nav-right page-" + props.locationState.nextPage}>
        </button>
        <div className="slide-container">
            <ContinuousSlider value={value} locationState={props.locationState} goToPage={props.goToPage}/>
        </div>
    </footer>
  );
}

export default Footer;
