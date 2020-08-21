import React from 'react';
import PageNavigation from "./PageNavigation";
import Footer from "./Footer";
import HistoryFlag from "./HistoryFlag";
import { CSSTransition } from "react-transition-group"
import Header from "./Header";

  const PDFReader = props => {
    return(
        <div className="reader-container">
            <Header displayState={props.displayState} displayStateHandler={props.displayStateHandler} isBookmark={props.locationState.isBookmark} handleBookMark={props.handleBookMark}/>
            <PageNavigation locationState={props.locationState} goToPage={props.goToPage}/>
            <CSSTransition
              in={props.historyState.historyIsAvailable}
              timeout={300}
              classNames="history-flag"
              unmountOnExit
            >
                <HistoryFlag locationState={props.locationState} direction={props.historyState.historyDirection} goToPage={props.goToPage}/>
            </CSSTransition>
            <div className="reader">
                <img id="pageImg" alt="page" src="https://pearsonux.sfo2.digitaloceanspaces.com/intro_stats_sample/1.png"/>
            </div>
            <Footer goToPage={props.goToPage} handleChange={props.handleChange} handleCommit={props.handleCommit} handleInput={props.handleInput} onFocus={props.handleEnableInput} onBlur={props.handleDisableInput} handleHistoryNav={props.handleHistoryNav} handlePageNav={props.handlePageNav} locationState={props.locationState} pagePopUp={props.displayState.pagePopUp} chapters={props.chapters} bookmarks={props.bookmarks} tempBookmark={props.tempBookmark}/>
        </div>
    )
}

export default PDFReader;
