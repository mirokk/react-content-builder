import React from 'react';
import ReactDOM from 'react-dom';


import {Editor} from '../src/index';


var content = [{"cols":[]}];
content = [{"cols":[{"params":{"width":"third"},"elements":[{"type":"TextAndHeadline","params":{"text":"content","hl":"heal"}}]},{"params":{"width":"third"},"elements":[{"type":"Headline","params":{"hl":"lskdf"}},{"type":"Text","params":{"text":"asdfasdfasdfasd asdfas asdasd asd asd fasdf asd asdf"}}]},{"params":{"width":"third"},"elements":[{"type":"TextAndHeadline","params":{"text":"kjhg"}}]}]},{"cols":[]},{"cols":[{"params":{"width":"full"},"elements":[]}]}];

let save = (c)=>{
  alert(
    "result: "+ JSON.stringify(c)
  );
}

ReactDOM.render(
  <Editor content={content} save={save} />,
  document.getElementById("content")
);





