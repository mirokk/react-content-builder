# react-content-builder
Drag and drop content builder/editor for react applications. It uses MarkDown instead of Wysiwyg.

##Early development stage!

This is an exciting project, but still very early in development, not production ready yet. Expecting it to be more stable and more feature rich by mid or end of September. 


It's easy to implement and configure to fit your needs. 

How to use: `npm install --save react-content-builder`

Then:

`import {Editor, Content} from 'react-content-builder';`

`<Editor>` is the Content Builder part. It expects one parameter `content={content}` and one callback function `save={(content)=>{alert(content);}}`.

The content then should be saved as a String in the database of your choice. To render the content type: `<Content content={content} />`

**Important:** To make it work you need to add the css files from the folder node_modules/react-content-builder/css into your project.

Here a minimal example to show the edior:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, Content} from 'react-content-builder';

let save = (c)=>{
  alert(
    "This can be saved in the backend (e.g. via REST): "+ JSON.stringify(c)
  );
}

let content = undefined; //Here you would add the current content
ReactDOM.render(
  <Editor content={content} save={save} />,
  document.getElementById("content")
);
````

Here you find a working example: https://github.com/mirokk/react-content-builder-simple-example

**More documentation and sample implementations are comming soon..!**
