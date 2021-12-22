import React from 'react';

import UserStack from './user.routes';
import AdminStack from './admin.routes';
import AuthStack from './auth.routes';
import { useAuth } from '../hooks/useAuth';

const Routes = () => {
	const { user } = useAuth();

	if (!user) {
		return <AuthStack />;
	}

	return user?.accessLevel === 220 ? <AdminStack /> : <UserStack />;
};

export default Routes;
