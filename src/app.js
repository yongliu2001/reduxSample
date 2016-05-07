import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
import App from './components/App';
import Sidebar from './components/Sidebar';
import VisibleCards from './components/VisibleCards';

reducers.routing = routerReducer;

const store = createStore(combineReducers(reducers));
const history = syncHistoryWithStore(browserHistory, store);

function run() {
	let state = store.getState();
	console.log(state);
	ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				<Route path='/' component={App}>
					<Route path='/deck/:deckId' component={VisibleCards}></Route>
				</Route>
			</Router>
		</Provider>
		, document.getElementById('root'));
}

run();

store.subscribe(()=> {
	run();
});



// window.show = ()=> store.dispatch(showAddDeck());
// window.hide = ()=> store.dispatch(hideAddDeck());
// window.add =()=> store.dispatch(addDeck(new Date().toString()));


// const store = Redux.createStore(function (state, action) {
// 	switch (action.type) {

// 		case 'ADD_CARD':
// 			let newCard = Object.assign({}, action.data, {
// 				score: 1,
// 				id: +new Date
// 			});
// 			return Object.assign({}, state, {
// 				cards: state.cards ? state.cards.concat([newCard]) : [newCard]
// 			});
// 		default: 
// 			return state || {};
// 	}
// });


// store.subscribe(() => {
// 	console.log(store.getState());
// });

// store.dispatch({
// 	type: 'ADD_CARD',
// 	data: {
// 		front: 'front',
// 		back: 'back'
// 	}
// });

// store.dispatch({
// 	type: 'ADD_CARD',
// 	data: {}
// });