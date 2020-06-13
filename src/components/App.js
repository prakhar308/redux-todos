import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';

const App = ({ match: { params } }) => {
	return (
		<div>
			<AddTodo />
			<VisibleTodoList filter={params.filter || 'SHOW_ALL'}/>
			<Footer />
		</div>
	);
}

export default App;
