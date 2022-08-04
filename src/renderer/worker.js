import undom from 'undom';
let COUNTER = 0;

const TO_SANITIZE = ['addedNodes', 'removedNodes', 'nextSibling', 'previousSibling', 'target'];

const Frombidden = ['children', 'parentNode', '__handlers', '_component', '_componentConstructor' ];

const NODES = new Map();


let document = global.document = undom();
for (let i in document.defaultView) if (document.defaultView.hasOwnProperty(i)) {
	global[i] = document.defaultView[i];
}


// Common browser globals
let url = '/';

let location = {
	_current: '/',
	get href() {
		return url;
	},
	get pathname() {
		return url.replace(/^(([a-z0-9]+\:)?\/\/[^/]+|[?#].*$)/g, '');
	},
	get search() {
		return (url.match(/\?([^#]*)(#.*)?$/) || [])[1];
	},
	get hash() {
		return (url.match(/#(.*)$/) || [])[1];
	}
};

let history = {
	pushState(a, b, url) {
		send({ type:'pushState', url });
	},
	replaceState(a, b, url) {
		send({ type:'replaceState', url });
	}
};




/** Returns the worker DOM Element corresponding to a serialized Element object.
 *	@param {String|Object} node		An `id`, or an object with an `__id` property.
 *	@returns {Element} element
 */

 /** Receives Event messages and refires them in the worker's DOM. */
function handleEvent(event) {
	let target = getNode(event.target);
	if (target) {
		event.target = target;
		event.bubbles = true;
		target.dispatchEvent(event);
	}
}


function getNode(node) {
	let id;
	if (node && typeof node==='object') id = node.__id;
	if (typeof node==='string') id = node;
	if (!id) return null;
	if (node.nodeName==='BODY') return document.body;
	return NODES.get(id);
}




/** Replaces with ID */
function ReID(obj) {
	if (!obj || typeof obj!=='object') return obj;

	if (Array.isArray(obj)) return obj.map(ReID);

	if (obj instanceof document.defaultView.Node) {
		let id = obj.__id;
		if (!id) {
			id = obj.__id = String(++COUNTER);
		}
		NODES.set(id, obj);
	}

	let out = {};
	for (let i in obj) {
		if (obj.hasOwnProperty(i) && Frombidden.indexOf(i)<0) {
			out[i] = obj[i];
		}
	}
	if (out.childNodes && out.childNodes.length) {
		out.childNodes = ReID(out.childNodes);
	}
	return out;
}
/** Receive messages from the page */
addEventListener('message', ({ data }) => {
	switch (data.type) {
		case 'init':
			url = data.url;
			break;
		case 'event':
			handleEvent(data.event);
			break;
	}
});

/** Observe DOM mutations and send MutationRecords to parent page. */
(new MutationObserver( mutations => {
	for (let i=mutations.length; i--; ) {
		let mutation = mutations[i];
		for (let j=TO_SANITIZE.length; j--; ) {
			let prop = TO_SANITIZE[j];
			mutation[prop] = ReID(mutation[prop]);
		}
	}
	send({ type:'MutationRecord', mutations });
})).observe(document, { subtree:true });


/** Send messages to the page */
function send(message) {
	postMessage(JSON.parse(JSON.stringify(message)));
}



