import React from 'react';
import data from "../data";

const Tableofcontents = props => {
    return(
      <div id="toc-panel" className="toc-panel drawer-panel" tabIndex="-1" role="tabpanel" hidden="">
          <div className="drawer-header">
            <div>
                <h1>Contents</h1>
            </div>
          </div>
          <div className="book-card">
            <img src="https://pearsonux.sfo2.digitaloceanspaces.com/intro_stats_sample/cover.png"/>
            <div>
                <p>Introductory Statistics, 10/e</p>
                <p>By Neil Weiss</p>
            </div>
          </div>
          <ul className="toc">
          {
            data.chapterNames.map((chapter, i) => {
                return (
                   <li key={i}><button className="toc-item" onClick={props.goToPage} >{chapter.chapter}</button></li>
                )
            })
            }
          </ul>
      </div>
    );
}

export default Tableofcontents;
