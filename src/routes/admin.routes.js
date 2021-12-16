import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/admin-pages/home';
import Users from '../pages/admin-pages/users';
import Layout from '../components/Layout';
const ApplicationRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/login' element={<Navigate to='/home' />} />
				<Route exact path='/cadastrar' element={<Navigate to='/home' />} />
				<Route exact path='/' element={<Navigate to='home' />} />
				<Route exact path='*' element={<h1>404</h1>} />
				<Route
					exact
					path='/home'
					element={
						<Layout>
							<Home />
						</Layout>
					}
				/>

				<Route
					exact
					path='/users'
					element={
						<Layout>
							<Users />
						</Layout>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default ApplicationRoutes;
