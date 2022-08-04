import { h, Component } from 'preact';
import Item from './item';

const LIST_NUMBER = 10;
const RENDER_EPOCH = 2;

/** make up data */
const NAMES = 'Shakira Lucas Norah Erick Gay Rachal Mable Orval Tracie Linh Rhoda Von Sarita Kaye Yanira Carter Hal Jamison Cari Kayleigh Bella Ehtel Latoyia Jenniffer Ryan Loralee Grazyna Roland Andy Billi'.split(' ');

const getNames = () => NAMES[Math.random()*.9999*NAMES.length|0];

function createNamesAndUnread() {
	let items = [];
	for (let i=0; i<10; i++) {
		items.push({
			id: i,
			name: `${getNames()} ${getNames()}`,
			unread: Math.max(0, Math.random()*20|0-10)
		});
	}
	return items;
}


export default class App extends Component {
	state = {
		items: createNamesAndUnread()
	};

	explainWebWorker = () => {
		this.setState({
			message: `
				click and additional layer comes out
			`.replace(/\t+/g,'').trim()
		});
	};

	closeMessage = () => {
		this.setState({ message: null });
	};

	// increment unread count for a few randomly selected contacts
	next = () => {
		let items = this.state.items.slice();
		for (let i=RENDER_EPOCH; i--; ) {
			items[Math.random()*items.length|0].unread++;
		}
		this.setState({ items });
	};

	// start looping after mount
	componentDidMount() {
		setTimeout(this.next, 100);
	}

	// track render start time before each render
	componentWillUpdate() {
		this.started = Date.now();
	}

	// after every render, queue another render
	componentDidUpdate() {
		this.elapsed = Date.now()-this.started;
		setTimeout(this.next, 500);
	}
	// 对JSX的渲染
	render(props, { items, message }) {
		return (
			<div class="app">
				<div class="bar bar-header bar-dark">
					<button class="button icon ion-information-circled" onClick={this.explainWebWorker} />
					<h1 class="title">
						实习作业
					</h1>
					<progress-spinner dark style="margin-left: 10px;" />
				</div>

				<div class="content has-header">
					<div class="list">
						<a class="item item-avatar item-icon-right" target="_blank">
							<h2>running in a Web Worker</h2>
							<i class="icon ion-ios-arrow-forward" />
						</a>
						<div class="item item-checkbox">
							<label class="checkbox">
								<input type="checkbox" id="use-vis" />
							</label>
							test checkbox
						</div>
						<div class="item item-divider">{items.length} data_pass_example</div>
						{ items.map( item => (
							<Item {...item} />
						)) }
					</div>
				</div>

				<div class={'dialog' + (message?' open':'')} onClick={this.closeMessage}>
					<div class="inner">
						{ message || '' }
					</div>
				</div>
			</div>
		);
	}
}
