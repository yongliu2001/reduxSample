import React, {Component} from 'react';
import Sidebar from './Sidebar';

// export default class App extends Component {
// 	render() {
// 		return (
// 			<div className='app'>
// 				{props.children}
// 			</div>
// 		);
// 	}
// }

const App = (props) => {
	return (
		<div className='app'>
			<Sidebar />
			{props.children}
		</div>
	);
};

export default App;