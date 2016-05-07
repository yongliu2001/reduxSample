import React, {Component} from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
// export default class App extends Component {
// 	render() {
// 		return (
// 			<div className='app'>
// 				{props.children}
// 			</div>
// 		);
// 	}
// }

const mapStateToProps = (props, { params: { deckId } }) => ({
	deckId
});

const App = ({ deckId, children }) => {
	return (
		<div className='app'>
			<Sidebar />
			<h1>Deck {deckId}</h1>
			{children}
		</div>
	);
};

export default connect(mapStateToProps)(App);