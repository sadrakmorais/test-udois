import React from 'react';

import { AuthProvider } from './store/Auth';

import GlobalStyles from './styles/global';
import ApplicationRoutes from './routes';

const App = () => {
	return (
		<AuthProvider>
			<GlobalStyles />
			<ApplicationRoutes />
		</AuthProvider>
	);
};

export default App;
