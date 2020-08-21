import React from 'react';

const MoreMenu = props => {

    function showPanel(e){
        let panel = document.querySelector(`#${e.target.closest('BUTTON').getAttribute('aria-controls')}`)
        panel.hasAttribute('hidden') ? panel.removeAttribute('hidden') : panel.setAttribute('hidden', '')
    }

    if(props.displayState.more == true){
    return(
      <div class="menu more-menu" id="more">
            <div className="user-info">
                <p className="avatar">AA</p>
                <div>
                    <p className="large" >Hannah Bernard</p>
                    <p className="grey">hannah.bernard@pearson.com</p>
                </div>
            </div>
            <ul>
                <li>
                    <a className="link-style">Contact support</a>
                </li>
                <li>
                    <button onClick={showPanel} aria-controls="about-panel">
                        <p>About</p>
                        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12.6772865,16.7357409 C12.2849891,17.0973856 11.6736274,17.0878409 11.2928932,16.7071068 L4.29289322,9.70710678 C3.90236893,9.31658249 3.90236893,8.68341751 4.29289322,8.29289322 C4.68341751,7.90236893 5.31658249,7.90236893 5.70710678,8.29289322 L12,14.5857864 L18.2928932,8.29289322 C18.6834175,7.90236893 19.3165825,7.90236893 19.7071068,8.29289322 C20.0976311,8.68341751 20.0976311,9.31658249 19.7071068,9.70710678 L12.7071068,16.7071068 C12.6971852,16.7170283 12.6872407,16.7265641 12.6772745,16.735721 L12.6772865,16.7357409 Z" fill="currentcolor" fill-rule="nonzero"></path>
                        </svg>
                    </button>
                </li>
                <div className="panel" id="about-panel" hidden>
                        <ul>
                            <li>
                                <a className="link-style">Accessibility</a>
                            </li>
                            <li>
                                <a className="link-style">Terms of use</a>
                            </li>
                            <li>
                                <a className="link-style">Privacy policy</a>
                            </li>
                        </ul>
                 </div>
            </ul>
      </div>
    )}else{
        return null
    }
}

export default MoreMenu;
