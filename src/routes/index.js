import React from 'react';

import UserStack from './user.routes';
import AuthStack from './auth.routes';
import { useAuth } from '../hooks/useAuth';

const Routes = () => {
	const { user } = useAuth();

	if (!user) {
		return <AuthStack />;
	}
	return <UserStack />;
};

export default Routes;
