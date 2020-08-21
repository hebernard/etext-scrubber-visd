import React from 'react';
import Tableofcontents from "../components/Tableofcontents";
import History from "../components/History";
import Notebook from "../components/Notebook";
import Study from "../components/Study";
import Resources from "../components/Resources";

const Drawer = props => {
    let tabs,
        panels;

    setTimeout(()=>{
        tabs = document.querySelectorAll('.drawer [role="tab"]');
        panels = document.querySelectorAll('.drawer [role="tabpanel"]');
        activateTab(document.querySelector(`#${props.displayState.drawerLastTab}`));
    },300)

    // When a tab is clicked, activateTab is fired to activate it
    function clickEventListener(event) {
        let tab = event.target.closest('BUTTON');
        activateTab(tab, false);
        props.setLastTab(event);
    };

    // Activates any given tab panel
    function activateTab(tab, setFocus) {
        setFocus = setFocus || true;
        // Deactivate all other tabs
        deactivateTabs();

        // Remove tabindex attribute
        tab.removeAttribute('tabindex');

        // Set the tab as selected
        tab.setAttribute('aria-selected', 'true');
        tab.classList.add('active');

        // Get the value of aria-controls (which is an ID)
        let controls = tab.getAttribute('aria-controls');

        // Remove hidden attribute from tab panel to make it visible
        document.getElementById(controls).removeAttribute('hidden');

        // Set focus when required
        if (setFocus) {
            tab.focus();
        };
    };

    // Deactivate all tabs and tab panels
    function deactivateTabs() {
        for (let t = 0; t < tabs.length; t++) {
            tabs[t].setAttribute('tabindex', '-1');
            tabs[t].setAttribute('aria-selected', 'false');
            tabs[t].classList.remove('active');
            tabs[t].removeEventListener('focus', focusEventHandler);
        };

        for (let p = 0; p < panels.length; p++) {
            panels[p].setAttribute('hidden', 'true');
        };
    };

    //
    function focusEventHandler(event) {
        const target = event.target;

        setTimeout(checkTabFocus, 300, target);
    };

    // Only activate tab on focus if it still has focus after the delay
    function checkTabFocus(target) {
        let focused = document.activeElement;

        if (target === focused) {
            activateTab(target, false);
        };
    };


    function expandDrawer(){
       let drawer = document.querySelector('.drawer');
       drawer.classList.contains('expanded') ? drawer.classList.remove('expanded') : drawer.classList.add('expanded');
    }

    return (
        <div className="drawer" id="drawer">
            <ul className="left-nav" role="tablist" aria-orientation="vertical" aria-label="Menu">
                <li>
                    <button>
                        <svg focusable="false" viewBox="0 0 18 18" aria-hidden="true">
                            <path d="M3.416 8H17a1 1 0 0 1 0 2H3.416l6.29 6.291a1.001 1.001 0 1 1-1.415 1.416L.293 9.709a1.001 1.001 0 0 1 0-1.418L8.291.293A1.001 1.001 0 1 1 9.707 1.71L3.416 8z"></path>
                        </svg>
                        <span>Back</span>
                    </button>
                </li>
                <li>
                    <button role="tab" aria-selected="true" aria-controls="toc-panel"
                            aria-label="Table of Contents" id="toc-tab">
                        <svg focusable="false" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M8,6 L21,6 C21.5522847,6 22,6.44771525 22,7 C22,7.55228475 21.5522847,8 21,8 L8,8 C7.44771525,8 7,7.55228475 7,7 C7,6.44771525 7.44771525,6 8,6 Z"></path>
                            <circle cx="3.5" cy="7" r="1.5"></circle>
                            <path d="M8,11 L21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5522847 21.5522847,13 21,13 L8,13 C7.44771525,13 7,12.5522847 7,12 C7,11.4477153 7.44771525,11 8,11 Z"></path>
                            <circle cx="3.5" cy="12" r="1.5"></circle>
                            <path d="M8,16 L21,16 C21.5522847,16 22,16.4477153 22,17 C22,17.5522847 21.5522847,18 21,18 L8,18 C7.44771525,18 7,17.5522847 7,17 C7,16.4477153 7.44771525,16 8,16 Z"></path>
                            <circle cx="3.5" cy="17" r="1.5"></circle>
                        </svg>
                        <span>Contents</span>
                    </button>
                </li>
                <li>
                    <button  role="tab" aria-selected="false"
                            aria-controls="history-panel" aria-label="History" id="history-tab">
                        <svg focusable="false" viewBox="0 0 16 23" aria-hidden="true">
                            <path fillRule="nonzero" d="M14 2H2v17.244l6-5.355 6 5.355V2zM8 16.57l-6.334 5.653A1 1 0 0 1 0 21.477V2a2 2 0 0 1 2-2h12a2 2  0 0 1 2 2v19.477a1 1 0 0 1-1.666.746L8 16.57z"></path>
                        </svg>
                        <span>History</span>
                    </button>
                </li>
                <li>
                    <button  role="tab" aria-selected="false"
                            aria-controls="notebook-panel" aria-label="Notebook" id="notebook-tab">
                        <svg focusable="false" viewBox="0 0 22 22" aria-hidden="true">
                            <path d="M18 1h1.5A2.5 2.5 0 0 1 22 3.5v10.672a2 2 0 0 1-.586 1.414l-5.828 5.828a2 2 0 0 1-1.414.586H2.5A2.5 2.5 0 0 1 0 19.5v-16A2.5 2.5 0 0 1 2.5 1H4a1 1 0 1 1 2 0h2a1 1 0 1 1 2 0h2a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0zm2 13V3.5a.5.5 0 0 0-.5-.5H18v1a1 1 0 0 1-2 0V3h-2v1a1 1 0 0 1-2 0V3h-2v1a1 1 0 0 1-2 0V3H6v1a1 1 0 1 1-2 0V3H2.5a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5H14v-3.5a2.5 2.5 0 0 1 2.5-2.5H20z"></path>
                        </svg>
                        <span>Notebook</span>
                    </button>
                </li>
                <li>
                    <button role="tab" aria-selected="false"
                            aria-controls="study-panel" aria-label="Study" id="study-tab">
                        <svg focusable="false" viewBox="0 0 22 22" aria-hidden="true">
                            <path d="M18 1h1.5A2.5 2.5 0 0 1 22 3.5v10.672a2 2 0 0 1-.586 1.414l-5.828 5.828a2 2 0 0 1-1.414.586H2.5A2.5 2.5 0 0 1 0 19.5v-16A2.5 2.5 0 0 1 2.5 1H4a1 1 0 1 1 2 0h2a1 1 0 1 1 2 0h2a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0zm2 13V3.5a.5.5 0 0 0-.5-.5H18v1a1 1 0 0 1-2 0V3h-2v1a1 1 0 0 1-2 0V3h-2v1a1 1 0 0 1-2 0V3H6v1a1 1 0 1 1-2 0V3H2.5a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5H14v-3.5a2.5 2.5 0 0 1 2.5-2.5H20z"></path>
                        </svg>
                        <span>Study</span>
                    </button>
                </li>
                <li>
                    <button role="tab" aria-selected="false"
                            aria-controls="resources-panel" aria-label="Resources" id="resources-tab">
                        <svg focusable="false" viewBox="0 0 22 22" aria-hidden="true">
                            <path d="M18 1h1.5A2.5 2.5 0 0 1 22 3.5v10.672a2 2 0 0 1-.586 1.414l-5.828 5.828a2 2 0 0 1-1.414.586H2.5A2.5 2.5 0 0 1 0 19.5v-16A2.5 2.5 0 0 1 2.5 1H4a1 1 0 1 1 2 0h2a1 1 0 1 1 2 0h2a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0zm2 13V3.5a.5.5 0 0 0-.5-.5H18v1a1 1 0 0 1-2 0V3h-2v1a1 1 0 0 1-2 0V3h-2v1a1 1 0 0 1-2 0V3H6v1a1 1 0 1 1-2 0V3H2.5a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5H14v-3.5a2.5 2.5 0 0 1 2.5-2.5H20z"></path>
                        </svg>
                        <span>Resources</span>
                    </button>
                </li>
            </ul>
            <div className="drawer-actions">
                <button onClick={expandDrawer} id="expand">
                </button>
                <button aria-controls="drawer" onClick={props.displayStateHandler}>
                    <svg focusable="false" viewBox="0 0 18 18" aria-hidden="true">
                        <path d="M9 7.182L15.805.377a1.286 1.286 0 0 1 1.818 1.818L10.818 9l6.805 6.805a1.286 1.286 0 1 1-1.818 1.818L9 10.818l-6.805 6.805a1.286 1.286 0 1 1-1.818-1.818L7.182 9 .377 2.195A1.286 1.286 0 1 1 2.195.377L9 7.182z"></path>
                    </svg>
                </button>
            </div>
            <Tableofcontents locationState={props.locationState} goToPage={props.goToPage}/>
            <History/>
            <Notebook/>
            <Study/>
            <Resources/>
        </div>
    );
}

export default Drawer;
