import React from 'react';
import data from "../data";

const HoverTip = props => {

    let chapterName;

    data.chapterNames.forEach(chapter => {
      chapter.pages.forEach(page => {
          if (page == props.id) {
              chapterName = chapter.chapter
          }
      })
  })

   const myRef = React.createRef();

   React.useEffect(() => {
     let totalDistance = document.querySelector('.MuiSlider-rail').offsetWidth;
     const tip = myRef.current;
     let tipLeft = ((props.id * 100)/260) - (((tip.offsetWidth/2)*100)/totalDistance);
     props.type === "bookmark" ? tip.style.left = tipLeft+'%' : tip.style.left = (tipLeft - 0.5)+'%'
     tip.setAttribute('hidden','')
   },[]);

    return(
      <div  id={"tip-"+props.id} className="hover-tip" ref={myRef}>
          <p>{chapterName}</p>
      </div>
    )
}

export default HoverTip;
