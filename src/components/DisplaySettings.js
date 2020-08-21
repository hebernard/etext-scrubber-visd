import React from 'react';
import littleA from '../images/littleA.svg'
import bigA from '../images/bigA.svg'

const DisplaySettings = props => {

    function handleThemeSelect(e){
        let allThemes = document.querySelectorAll('.theme-color');
        allThemes.forEach(theme => {
            theme.classList.remove('selected')
        })
        e.target.classList.add('selected')
    }

    function handleSlider(e){
        console.log(e.target.value)
    }

    if(props.displayState.displaySettings == true){
    return(
      <div class="menu display-settings" id="displaySettings">
          <div className="zoom-settings">
              <img  src={littleA}/>
              <input onInput={handleSlider} type="range" min="1" max="100" defaultValue="50" id="zoomSettingsSlider"/>
              <img  src={bigA}/>
          </div>
          <div className="theme-settings">
            <button onClick={handleThemeSelect} className="theme-color white selected"></button>
            <button onClick={handleThemeSelect} className="theme-color sepia"></button>
            <button onClick={handleThemeSelect} className="theme-color dark"></button>
            <div className="check"/>
          </div>
      </div>
    )}else{
        return null
    }
}

export default DisplaySettings;
