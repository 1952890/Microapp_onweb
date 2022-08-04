import './renderer/worker';
import { h, render } from 'preact';

let root;
function init() {
	let microApp = require('./components/app');
	root = render(h(microApp.default || microApp), document.body, root);
}

if (module.hot) module.hot.accept(['./components/app'], init);

init();
