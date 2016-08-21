import dragula from 'react-dragula';
import order from './order';

let initialized = false;
let initialize = ()=>{
	dragula({
	  isContainer: function (el) {
	    return el.classList.contains('editorContainer');
	  },
	  moves: function (el, container, handle) {
	    return handle.classList.contains('rowhandle');
	  },
	  copy: function (el, source) {
	    return source.classList.contains('editorTools');
	  },
	  accepts: function (el, target) {
	    return !target.classList.contains('editorTools');
	  }
	})
	.on('dragend', function (el) { order() });

	dragula({
	  isContainer: function (el) {
	    return el.classList.contains('rowContainer');
	  },
	  moves: function (el, container, handle) {
	    return handle.classList.contains('colhandle');
	  },
	  copy: function (el, source) {
	    return source.classList.contains('editorTools');
	  },
	  accepts: function (el, target) {
	    return !target.classList.contains('editorTools');
	  }
	})
	.on('dragend', function (el) { order() });

	dragula({
	  isContainer: function (el) {
	    return el.classList.contains('colContainer');
	  },
	  moves: function (el, container, handle) {
	    return handle.classList.contains('elementhandle');
	  },
	  copy: function (el, source) {
	    return source.classList.contains('editorTools');
	  },
	  accepts: function (el, target) {
	    return !target.classList.contains('editorTools');
	  }
	})
	.on('dragend', function (el) { order() });
}
export default ()=>{
	if (!initialized){
		initialize();
		initialized=true;
	}
}