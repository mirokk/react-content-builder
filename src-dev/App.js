import React from 'react';
import ReactDOM from 'react-dom';


import {Editor, Content} from '../src/index';


let content = [{"cols":[{"params":{"width":"third"},"elements":[{"type":"TextAndHeadline","params":{"text":"This is a configurable **Drag and Drop Content Builder for React.js** applications.\n  \nIt supports **Markdown**","hl":"Welcome!"}}]},{"params":{"width":"third"},"elements":[{"type":"Headline","params":{"hl":"react-content-builder"}},{"type":"Text","params":{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}]},{"params":{"width":"third"},"elements":[{"type":"Headline","params":{"hl":"Highly adaptable "}},{"type":"Text","params":{"text":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}}]}]}];
let save = (c)=>{
  alert(
    "This can be saved in the backend (e.g. via REST): "+ JSON.stringify(c)
  );
}

ReactDOM.render(
  <Editor content={content} save={save} />,
  document.getElementById("content")
);


/*

import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, Content} from 'react-content-builder';

let save = (c)=>{
  alert(
    "This can be saved in the backend (e.g. via REST): "+ JSON.stringify(c)
  );
}

ReactDOM.render(
  <Editor content={content} save={save} />,
  document.getElementById("content")
);

*/
