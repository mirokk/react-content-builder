import React from 'react';
import ReactDOM from 'react-dom';


import {Editor} from '../src/index';


var content = [{"cols":[]}];
content = [{"cols":[{"params":{"width":"third"},"elements":[{"type":"TextAndHeadline","params":{"text":"This is a configurable drag and drop content builder for React.js applications.","hl":"Welcome!"}}]},{"params":{"width":"third"},"elements":[{"type":"Headline","params":{"hl":"react-content-builder"}},{"type":"Text","params":{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}]},{"params":{"width":"third"},"elements":[{"type":"Headline","params":{"hl":"Highly adaptable "}},{"type":"Text","params":{"text":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}}]}]}];

let save = (c)=>{
  alert(
    "result: "+ JSON.stringify(c)
  );
}

ReactDOM.render(
  <Editor content={content} save={save} />,
  document.getElementById("content")
);





