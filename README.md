# react-content-builder
Drag and drop content builder/editor for react applications.

This is an exciting project, but still very early in development, not production ready yet. Expecting it to be more stable mid September.

It's easy to implement and configure to fit your needs.

How to use: npm install --save react-content-builder

Then:

import {Editor, Content} from 'react-content-builder';

<Editor> is the Content Builder part. It expects one parameter "content" and one callback function "save(content)".

The content then should be saved as a String in the database of your choice. To render the content type: <Content content={content} />
