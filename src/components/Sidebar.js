import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck} from '../actions';

const mapStateToProps = ({decks, addingDeck }) => ({
	decks, addingDeck
});

const mapDispatchToProps = dispatch => ({
	addDeck:   name => dispatch(addDeck(name)), 
	showAddDeck: () => dispatch(showAddDeck()),
	hideAddDeck: () => dispatch(hideAddDeck()) 
});

const Sidebar = React.createClass({
	componentDidUpdate() {
		var el = ReactDOM.findDOMNode(this.refs.add);
		if (el) {
			el.focus();
		}
	},

	render() {
		let props = this.props;
		return (
			<div className='sidebar'>
				<h2> All Decks </h2>

				<button onClick={ e=> this.props.showAddDeck() }>new Deck</button>
				<ul>
					{props.decks.map((deck, i) => 
						<li key={i}> {deck.name} </li>
					)}
				</ul>
				{props.addingDeck && <input ref='add' onKeyPress={this.createDeck}/>}
			</div>
		);
	},

	createDeck(event) {
		if(event.which !== 13) return;

		var name = ReactDOM.findDOMNode(this.refs.add).value;
		this.props.addDeck(name);
		this.props.hideAddDeck();
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);