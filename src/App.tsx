import { Routes, Route } from 'react-router-dom';
import './App.css';

import { HeaderBar } from './components';
import { Dashboard, Jobs, Properties } from './pages';

function App() {
	return (
		<div className="App">
			<HeaderBar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/properties" element={<Properties />} />
			</Routes>
		</div>
	);
}

export default App;
