import React from 'react';

const PagePopUp = props => {

    let url = `https://pearsonux.sfo2.digitaloceanspaces.com/intro_stats_sample/thumbnails/${props.locationState.currentPage}.png`


    let imgArray = [];
    for(let i = 1; i < 261; i++){
        imgArray.push(i)
    }


    if(props.pagePopUp == true){
    return(
      <div className={"page-popup " + "bookmark-" + props.tempBookmark} style={{'left':props.left}} >
          <p className="chapter-name">{props.locationState.currentChapter}</p>
          {
            imgArray.map((i) => {
              return (
                  <img key={i} src={process.env.PUBLIC_URL + '/images/thumbnails/' + i + '.png'} className={props.locationState.currentPage == i ? 'active' : null}/>
              )
            })
          }
          <p>{props.locationState.currentPage}</p>
      </div>
    )}else{
        return null
    }
}

export default PagePopUp;
