import { useContext } from 'react';

import { AuthContext } from '../store/Auth';

export function useAuth() {
	const value = useContext(AuthContext);

	return value;
}
