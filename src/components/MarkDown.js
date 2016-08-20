import mmd from 'micromarkdown';
import React from 'react';

module.exports = ({children})=>(
	<span dangerouslySetInnerHTML={{__html: mmd.parse(children)}} />
);