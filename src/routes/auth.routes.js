import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import { useAuth } from '../hooks/useAuth';

const ApplicationRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/login' element={<SignIn />} />
				<Route exact path='/cadastrar' element={<SignUp />} />
				<Route exact path='*' element={<Navigate to='/login' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default ApplicationRoutes;
