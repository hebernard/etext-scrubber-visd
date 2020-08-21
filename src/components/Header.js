import React from 'react';


const Header = props => {

    // function displayHandler(e){
    //     props.displayStateHandler(e.target.closest('BUTTON').id);
    // }

    let bookmark;
    let bookmarkText;
    if(props.isBookmark == true){
      bookmark = <path id="on" xmlns="http://www.w3.org/2000/svg" d="M11.9999999,17.0933232 L5.66583691,22.7460971 C5.25377873,23.1138287 4.62163425,23.0778949 4.25390268,22.6658367 C4.09037716,22.4825997 4,22.2455937 4,21.9999998 L4,3 C4,1.8954305 4.8954305,1 6,1 L18,1 C19.1045695,1 20,1.8954305 20,3 L20,22 C20,22.5522847 19.5522847,23 19,23 C18.754406,23 18.5174001,22.9096228 18.3341631,22.7460973 L11.9999999,17.0933232 Z"/>
      bookmarkText = "Remove bookmark"
    } else{
      bookmark = <path id="off" xmlns="http://www.w3.org/2000/svg" d="M18,3 L6,3 L6,19.7672659 L11.9999999,14.4127077 L18,19.7672659 L18,3 Z M11.9999999,17.0933232 L5.66583691,22.7460971 C5.25377873,23.1138287 4.62163425,23.0778949 4.25390268,22.6658367 C4.09037716,22.4825997 4,22.2455937 4,21.9999998 L4,3 C4,1.8954305 4.8954305,1 6,1 L18,1 C19.1045695,1 20,1.8954305 20,3 L20,22 C20,22.5522847 19.5522847,23 19,23 C18.754406,23 18.5174001,22.9096228 18.3341631,22.7460973 L11.9999999,17.0933232 Z"/>
      bookmarkText = "Add bookmark"
    }

    return(
        <header className="header">
            <div>
                <button id="header-back-btn">
                    <svg focusable="false" viewBox="0 0 18 18" aria-hidden="true">
                        <path fill="currentcolor" d="M3.416 8H17a1 1 0 0 1 0 2H3.416l6.29 6.291a1.001 1.001 0 1 1-1.415 1.416L.293 9.709a1.001 1.001 0 0 1  0-1.418L8.291.293A1.001 1.001 0 1 1 9.707 1.71L3.416 8z"></path>
                    </svg>
                    <span className="tooltip">Back to Bookshelf</span>
                </button>
                <button id="drawer-btn" aria-controls="drawer" onClick={props.displayStateHandler}>
                    <svg focusable="false" viewBox="0 0 20 18" aria-hidden="true">
                        <path fill="currentcolor" d="M1 0h18a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zM1 8h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zM1 16h18a1 1 0 0 1 0  2H1a1 1 0 0 1 0-2z"></path>
                    </svg>
                    <span className="tooltip">Menu</span>
                </button>
                {/*<button id="sched-reading-btn" aria-controls="scheduledReadings" onClick={props.displayStateHandler}>*/}
                {/*    <svg focusable="false" viewBox="0 0 22 23" aria-hidden="true">*/}
                {/*        <g fill="none" fill-rule="evenodd">*/}
                {/*            <path d="M-1 0h24v24H-1z"></path>*/}
                {/*            <path fill="currentcolor" fill-rule="nonzero" d="M16 .5A2 2 0 0 1 17.937 2H19.5A2.5 2.5 0 0 1 22 4.5v16a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 0  20.5v-16A2.5 2.5 0 0 1 2.5 2h1.563a2 2 0 0 1 3.874 0h6.126A2 2 0 0 1 16 .5zM20 9H2v11.5a.5.5 0 0 0  .5.5h17a.5.5 0 0 0 .5-.5V9zm-.5-5h-17a.5.5 0 0 0-.492.41L2 4.5V7h18V4.5a.5.5 0 0 0-.5-.5z"></path>*/}
                {/*            <path fill="currentcolor" d="M15.5 16h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zM15.5 11h2a.5.5 0 0 1  .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zM10.5 11h2a.5.5 0 0 1 .5.5v2a.5.5 0 0  1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zM10.5 16h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0  1-.5-.5v-2a.5.5 0 0 1 .5-.5zM5.5 16h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0  1-.5-.5v-2a.5.5 0 0 1 .5-.5z"></path>*/}
                {/*        </g>*/}
                {/*    </svg>*/}
                {/*    <span className="tooltip">Scheduled readings</span>*/}
                {/*</button>*/}
             </div>
             <div>
                <button id="search-btn" aria-controls="search">
                    <svg focusable="false" viewBox="0 0 23 22" aria-hidden="true" role="presentation">
                        <path fill="currentcolor" d="M17.656 15.409l4.986 4.747a.992.992 0 0 1 0 1.452c-.42.401-1.103.401-1.525 0l-4.986-4.747a10.167 10.167 0 0 1-6.194 2.073c-5.465 0-9.895-4.218-9.895-9.422C.042 4.31 4.472.091 9.938.091c5.465 0 9.895 4.218 9.895 9.421 0  2.232-.815 4.283-2.177 5.897zm-7.718 1.442c4.257 0 7.708-3.285 7.708-7.339 0-4.053-3.451-7.338-7.709-7.338-4.257 0-7.708 3.285-7.708 7.338 0 4.054 3.451 7.34 7.708 7.34z"></path>
                    </svg>
                    <span className="tooltip">Search</span>
                </button>
                <button id="bookmark-btn" onClick={props.handleBookMark}>
                    <svg focusable="false" viewBox="0 0 23 22" aria-hidden="true" role="presentation">
                     {bookmark}
                    </svg>
                    <span className="tooltip">{bookmarkText}</span>
                </button>
                <button id="display-btn" aria-controls="displaySettings">
                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0-1h24v24H0z"></path>
                            <path fill="currentcolor" fill-rule="nonzero" d="M13.31 17H3.69l-1.603 4.502a.748.748 0 0 1-.705.498H.5a.5.5 0 0 1-.47-.669L7.326.831a1.246 1.246 0 0 1 2.348 0l5.878 16.513 2.461-6.895a1.1 1.1 0 0 1 2.072 0l3.886 10.883A.5.5 0 0 1 23.5  22h-.62a.75.75 0 0 1-.707-.498L21.637 20h-5.14l.474 1.331a.5.5 0 0 1-.47.669h-.883a.748.748 0 0  1-.705-.498L13.311 17zm-.711-2l-4.1-11.517L4.402 15h8.198zm4.487 3.25h3.926l-1.963-5.498-1.963 5.498z"></path>
                        </g>
                    </svg>
                    <span className="tooltip">Display settings</span>
                </button>
                {/*<button id="playlist-btn">*/}
                {/*    <svg focusable="false" viewBox="0 0 24 22" aria-hidden="true" role="presentation">*/}
                {/*        <path fill="currentcolor" d="M21 10.685c1.786.966 3 2.856 3 5.03v.57A5.714 5.714 0 0 1 18.286 22H18a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h.286c.242 0 .48.015.714.044V8a6 6 0 0 0-6-6h-2a6 6 0 0 0-6 6v2.044A5.77 5.77 0 0 1 5.714 10H6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-.286A5.714 5.714 0 0 1 0 16.286v-.572a5.713 5.713 0 0 1 3-5.03V8a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8v2.685zM18.286 12H18v8h.286A3.714 3.714 0 0 0 22 16.286v-.572A3.714 3.714 0 0 0 18.286 12zM5.714 12A3.714 3.714 0 0 0 2 15.714v.572A3.714 3.714 0 0 0 5.714 20H6v-8h-.286z"></path>*/}
                {/*    </svg>*/}
                {/*    <span className="tooltip">Audio playlist</span>*/}
                {/*</button>*/}
                {/*<button id="help-btn" aria-controls="help" onClick={props.displayStateHandler}>*/}
                {/*    <svg focusable="false" viewBox="0 0 18 18" aria-hidden="true" role="presentation">*/}
                {/*        <g fill="none" fill-rule="evenodd">*/}
                {/*            <path d="M0 0h18v18H0z"></path>*/}
                {/*            <path fill-rule="nonzero" stroke="currentcolor" stroke-width="1.5"  d="M9 17.25A8.25 8.25 0 1 0 9 .75a8.25 8.25 0 0 0 0 16.5z"></path>*/}
                {/*            <path fill="currentcolor" fill-rule="nonzero" d="M8.625 13h.75a.5.5 0 0 1.5.5v.75a.5.5 0 0 1-.5.5h-.75a.5.5 0 0 1-.5-.5v-.75a.5.5 0 0 1 .5-.5zM7.25 7.003L6.5 6.997a.5.5 0 0 1-.495-.505v-.001l.002-.18a2.505 2.505 0 0 1 2.497-2.306h1.69a2.81 2.81 0 0 1 2.81 2.81v.345a2.775 2.775 0 0 1-2.286 2.731 1.025 1.025 0 0 0-.844 1.009v.6a.5.5 0 0 1-.5.5h-.75a.5.5 0 0 1-.5-.5v-.6c0-1.344.963-2.495 2.286-2.731.488-.088.844-.513.844-1.009v-.345a1.06 1.06 0 0 0-1.06-1.06h-1.69c-.394 0-.721.302-.75.633l-.001.12a.5.5 0 0 1-.504.495z"></path>*/}
                {/*        </g>*/}
                {/*    </svg>*/}
                {/*    <span className="tooltip">Help</span>*/}
                {/*</button>*/}
                 <button id="more-btn" aria-controls="more">
                     <svg focusable="false"  viewBox="0 0 18 18" aria-hidden="true" fill="none">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5  9.82843 8.17157 10.5 9 10.5Z" fill="currentcolor"></path>
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5C9.82843 5 10.5 4.32843 10.5 3.5C10.5 2.67157 9.82843 2 9 2C8.17157 2 7.5 2.67157 7.5 3.5C7.5 4.32843  8.17157 5 9 5Z" fill="currentcolor"></path>
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16C9.82843 16 10.5 15.3284 10.5 14.5C10.5 13.6716 9.82843 13 9 13C8.17157 13 7.5 13.6716 7.5 14.5C7.5  15.3284 8.17157 16 9 16Z" fill="currentcolor"></path>
                     </svg>
                     <span className="tooltip">More</span>
                </button>
             </div>
        </header>
    )
}

export default Header;
