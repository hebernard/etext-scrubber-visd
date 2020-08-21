import React from 'react';
import './css/styles.css';
import PDFReader from "./components/PDFReader";
import Drawer from "./components/Drawer";
import { CSSTransition } from 'react-transition-group';
import data from "./data";
import Alert from "./components/Alert"

function App() {

  React.useEffect(() => {
        const historyTimer = setTimeout(()=>{
          if(historyState.historyIsAvailable == true){
              setHistoryState({...historyState, historyIsAvailable: false})
          }
        }, 30000)
        return () => clearTimeout(historyTimer);
  });

  React.useEffect(() => {
        const alertTimer = setTimeout(()=>{
          if(displayState.alert == true){
              setDisplayState({...displayState, alert: false})
          }
        }, 10000)
        return () => clearTimeout(alertTimer);
  });

  const [ displayState, setDisplayState ] = React.useState({
    drawer: false,
    drawerLastTab: 'toc-tab',
    scheduledReadings: false,
    search: false,
    displaySettings: false,
    help:false,
    more: false,
    pagePopUp: false,
    alert: false,
    alertText: null,
  });

  const [ locationState, setLocationState ] = React.useState({
    currentPage: 1,
    lastSavedPage:1,
    currentChapter:data.chapterNames[0].chapter,
    isBookmark: false,
    nextPage: 2,
    previousPage: 0,
    lastKnownPage: 1,
    lastKnownChapter:data.chapterNames[0].chapter
    });

  const [historyState, setHistoryState] = React.useState({
    historyIsAvailable: false,
    historyDirection: 'left',
  });

  const [tempBookmark, setTempBookmark] = React.useState(false);


  function displayStateHandler(e){
    let itemToDisplay = e.target.closest('BUTTON').getAttribute('aria-controls')
    let newState = {...displayState}
    newState[itemToDisplay] = !displayState[itemToDisplay]
    setDisplayState(newState)
  }

  const setLastTab = (e) => {
    setDisplayState({...displayState, drawerLastTab: e.target.id})
  }

  const goToPage = (e, valueFromSlider) => {
    e.preventDefault()
    console.log(e.type)
    let value,
        newPage,
        newSavedPage,
        newChapter,
        newIsBookmark,
        newNextPage,
        newPreviousPage,
        newLastKnownPage,
        newLastKnownChapter,
        newDirection,
        commit = false,
        showHistory = false;
    let pageImg = document.querySelector('#pageImg');
    let historybtn = document.querySelector('.history-button');
    let textInput = document.querySelector('input[type="text"]');

    //input
    if(e.target.classList.contains('input-form')){
        let formValue = parseInt(e.target.children[0].value)
        if(formValue >= 1 && formValue <= 260) {
            value = formValue
        }else{
            return
        }
        commit = true;
        showHistory = true;
    }

    //page L R
    else if(e.target.classList.contains('page-nav-right') || e.target.classList.contains('page-nav-left')){
        if(e.target.classList.contains('page-nav-right')){
          value = locationState.currentPage + 1;
      }else if(e.target.classList.contains('page-nav-left')){
          value = locationState.currentPage - 1;
      }
      commit = true;
      showHistory = false;
    }

    //toc
    else if(e.target.classList.contains('toc-item')){
        data.chapterNames.forEach(chapter => {
            if(chapter.chapter == e.target.innerText){
                value = chapter.pages[0]
            }
        })
        commit = true;
        showHistory = true;
    }

    //bookmark
    else if(e.target.classList.contains('bookmark')){
        value = parseInt(e.target.id.split("-")[1])
        commit = true;
        showHistory = true;
    }

    //history
    else if(e.target.classList.contains('history-flag') || e.target.classList.contains('history-button')){
        value = locationState.lastKnownPage;
        commit = true;
        showHistory = true;
    }

    //slider
    else if(e.target.classList.contains('MuiSlider-rail') || e.target.classList.contains('MuiSlider-root') || e.target.classList.contains('MuiSlider-thumb')){
         value = valueFromSlider;
         if(e.type === 'mousemove'){
             commit = false;
             showHistory = false;
             //page pop up
             setDisplayState({...displayState, pagePopUp: true})
             let popup = document.querySelector('.page-popup')
             let distanceLeft = document.querySelector('.MuiSlider-track').offsetWidth;
             let totalDistance = document.querySelector('.MuiSlider-rail').offsetWidth;
             if(totalDistance - distanceLeft < 60){
                if(popup)popup.classList.add('right-side')
             }else{
                if(popup)popup.classList.remove('right-side')
             }
         }else if(e.type === 'mouseup'){
             commit = true;
             showHistory = true;
             setDisplayState({...displayState, pagePopUp: false})
         }
    }

    //apply these changes to all events
    newPage = value;
    newSavedPage = value;
    newNextPage = value + 1;
    newPreviousPage = value - 1;
    if(commit === true)newLastKnownPage = locationState.lastSavedPage;

    data.bookmarks.forEach(bookmark => {
         if(bookmark === newPage){
            newIsBookmark = true;
            let thumb = document.querySelector('.MuiSlider-thumb')
            if(commit === true)thumb.classList.add('active')
         }
         //hide bookmark icon when scrubbing over it
         let domBookmark = document.querySelector('#bookmark-' + bookmark)
         if (newPage > (bookmark - 4) && newPage < (bookmark + 4)) {
              domBookmark.setAttribute('hidden', '')
         } else {
              domBookmark.removeAttribute('hidden')
         }
    })
    setTempBookmark(newIsBookmark) //for page pop up bookmark
    data.chapterNames.forEach(chapter => {
        chapter.pages.forEach(page => {
          if(page === newPage){newChapter = chapter.chapter}
         })
     })

    textInput.value = newPage

    //change page/state only if committed
    if(commit === true) {
      data.chapterNames.forEach(chapter => {
        chapter.pages.forEach(page => {
          if(page === newLastKnownPage){newLastKnownChapter = chapter.chapter}
         })
     })
      setLocationState({
          currentPage: newPage,
          lastSavedPage: newSavedPage,
          currentChapter: newChapter,
          isBookmark: newIsBookmark,
          nextPage: newNextPage,
          previousPage: newPreviousPage,
          lastKnownPage: newLastKnownPage,
          lastKnownChapter: newLastKnownChapter
      });
      pageImg.setAttribute('src', `https://pearsonux.sfo2.digitaloceanspaces.com/intro_stats_sample/${newPage}.png`);
    }else{
        setLocationState({
          ...locationState,
          currentPage: newPage,
          currentChapter: newChapter,
        });
    }

    //show history flag conditionally
    if(showHistory === true) {
      newDirection = newPage > newLastKnownPage ? 'left' : 'right';
      setHistoryState({
          historyIsAvailable: true,
          historyDirection: newDirection
      })
    }else{
       setHistoryState({...historyState, historyIsAvailable: false})
    }

    //show history btn conditionally
    historybtn.style.opacity = '0';
    if(Math.abs(newPage - newLastKnownPage) >= 10) {
        setTimeout(()=>{
                  historybtn.style.opacity = '1';
                  historybtn.style.pointerEvents = 'unset';
        },100)
    }
  }

  const handleEnableInput = (event) => {
      event.target.removeAttribute('value');
      event.target.value = null;
  };

  const handleDisableInput = (event) => {
      event.target.setAttribute('value', locationState.currentPage);
      event.target.value = locationState.currentPage;
  };

  const handleBookMark = () => {
      let index = data.bookmarks.indexOf(locationState.currentPage);
      // let newBookmarks = [...marks];
      !locationState.isBookmark === true ? data.bookmarks.push(locationState.currentPage) : data.bookmarks.splice(index, 1);
      let newLocationState = !locationState.isBookmark;
      // let newBookmarkState = newBookmarks;
      setLocationState({...locationState, isBookmark: newLocationState})
      // setMarks(newBookmarkState)
      let handle = document.querySelector('.MuiSlider-thumb')
      if(!locationState.isBookmark === true) handle.setAttribute('hidden', '')
      setTimeout(()=>{
        handle.removeAttribute('hidden')
        let domBookmark = document.querySelector('#bookmark-' + locationState.currentPage)
        if(domBookmark)domBookmark.setAttribute('hidden','')
        },1000)
      let newText;
      if(!locationState.isBookmark === true){
        newText = "1 bookmark has been added"
      }else{
        newText = "1 bookmark has been removed"
      }
      setDisplayState({...displayState, alert:true, alertText: newText})
  }

  const closeAlert = () => {
      setDisplayState({...displayState, alert:false})
  }

  return (
    <div className="App">
      <CSSTransition
          in={displayState.drawer}
          timeout={300}
          classNames="drawer"
        >
      <Drawer
        displayState={displayState}
        displayStateHandler={displayStateHandler}
        locationState={locationState}
        goToPage={goToPage}
        setLastTab={setLastTab}/>
      </CSSTransition>
      <Alert displayState={displayState} closeAlert={closeAlert}/>
      <PDFReader
        displayState={displayState}
        displayStateHandler={displayStateHandler}
        locationState={locationState}
        historyState={historyState}
        // handleChange={handleChange}
        // handleCommit={handleCommit}
        handleEnableInput={handleEnableInput}
        handleDisableInput={handleDisableInput}
        handleBookMark={handleBookMark}
        chapters={data.chapterNames}
        bookmarks={data.bookmarks}
        tempBookmark={tempBookmark}
        goToPage={goToPage}
        />
    </div>
  );
}

export default App;
