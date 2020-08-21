import React from 'react';
import PageNavigation from "./PageNavigation";


const Reader = props => {

    fetch("https://d38l3k3yaet8r2.cloudfront.net/resources/products/epubs/generated/ead49960-ec6d-11e5-9d50-2fd62d25ac95/content/private/OPS/xhtml/fileP70004899170000000000000000483AF.xhtml", {
      headers: {
        'token': 'ff37389b-32f9-4748-b9f8-03e03b59afa1',
        }
       })
      .then(response => {return response.text()})
      .then(text => {
        let parser = new DOMParser()
        let doc = parser.parseFromString(text, "application/xml")
        let newDoc = document.createDocumentFragment()
        newDoc.append(doc.children[0])
        setTimeout(()=>{
            let container = document.querySelector('.reader')
            if(!container.shadowRoot){
                container.attachShadow({ mode: 'open' });
                container.shadowRoot.appendChild(newDoc);
                let newStyleOne = document.createElement('link')
                newStyleOne.rel = 'stylesheet';
                newStyleOne.href = 'https://d38l3k3yaet8r2.cloudfront.net/resources/products/epubs/generated/ead49960-ec6d-11e5-9d50-2fd62d25ac95/content/public/OPS/css/design_classroom.css';
                let head = container.shadowRoot.querySelector('head')
                head.appendChild(newStyleOne)
            }
        },1000)
    });



    return(
        <div className={"reader-container " + "drawer"+props.displayState.drawer}>
            <PageNavigation/>
            <div className="reader"></div>
        </div>
    )
}

export default Reader;
