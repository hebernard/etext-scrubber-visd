import React from 'react';
import data from "../data";
import bookmark from '../images/bookmark-card-flag.svg';

const History = props => {
    return(
      <div id="history-panel" className="history-panel drawer-panel" tabIndex="0" role="tabpanel" hidden>
          <div className="drawer-header">
              <h1>History</h1>
          </div>
          <div className="cards">
              <div>
                <div className="recent">
                    <h2>Recently visited</h2>
                    <button className="link-style">Clear recent</button>
                </div>
                    <div className="history-cards">
                    {
                        data.recentlyVisited.map((card, i) => {
                            return (
                                <div className="card-container">
                                    <div key={i} className="card history-card">
                                        <p className="grey caps" >{card.section}</p>
                                        <p className="bold">{card.page}</p>
                                        <p className="grey caps right" >{card.dateCreated}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                {
                    data.history.map((chapter, i) => {
                        return (
                            <div>
                                <h2>{chapter.chapterName}</h2>
                                <div className="history-cards">
                                    {
                                        chapter.history.map((card, i) => {
                                            return (
                                                <div className="card-container">
                                                    <div className="card history-card bookmark-card">
                                                        <button>
                                                            <img src={bookmark}/>
                                                            <span className="tooltip">Remove bookmark</span>
                                                        </button>
                                                        <p className="grey caps" >{card.section}</p>
                                                        <p className="bold">{card.page}</p>
                                                        <p className="grey caps right" >{card.dateCreated}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
          </div>
      </div>
    );
}

export default History;
