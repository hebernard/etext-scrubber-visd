import React from 'react';

const Notebook = props => {
    return(
      <div id="notebook-panel" className="notebook-panel drawer-panel" tabIndex="0" role="tabpanel" hidden>
        <div className="drawer-header">
            <div>
                <h1>Notebook</h1>
                <button className="link-style">Copy notes</button>
            </div>
          </div>
          <div className="toolbar">
            <div>
                <button>
                    <svg focusable="false" viewBox="0 0 18 18" aria-hidden="true" role="presentation">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M-3-3h24v24H-3z"></path>
                            <circle cx="8" cy="8" r="8" stroke="#252525" stroke-width="2" transform="translate(1 1)"></circle>
                        </g>
                    </svg>
                    <span>Select all</span>
                </button>
                <button>
                    <svg focusable="false" viewBox="0 0 16 12" aria-hidden="true" role="presentation">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M-4-6h24v24H-4z"></path>
                            <path stroke="#252525" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11h2M1 1h14M4 6h8"></path>
                        </g>
                    </svg>
                    <span>Filter</span>
                </button>
            </div>
            <button className="primary">Add note</button>
          </div>
          <div className="note-cards">
              <div className="card note-card">
                    <div className="group">
                        <p className="grey caps">1.1.0 Introduction</p>
                        <button>
                            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="highlight highlight-green">People respond to economic incentives. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p class="note">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    <div className="tags">
                        <p className="tag">tag</p>
                        <p className="tag">tag</p>
                    </div>
                    <div className="group">
                        <button>
                            <svg focusable="false" viewBox="0 0 18 18" aria-hidden="true" role="presentation">
                                <circle cx="8" cy="8" r="8" fill="none" fill-rule="evenodd" stroke="#252525" stroke-width="2" transform="translate(1 1)"></circle>
                            </svg>
                        </button>
                        <p className="grey caps" >December 19, 2019</p>
                    </div>
              </div>

          </div>
      </div>
    );
}

export default Notebook;
