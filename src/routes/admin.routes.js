import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/admin-pages/home';
import Users from '../pages/admin-pages/users';
import Category from '../pages/admin-pages/category';
import Currency from '../pages/admin-pages/currency';
import Invoices from '../pages/admin-pages/invoice';
import PagesTemplates from '../pages/admin-pages/pages-templates';
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
					path='/usuarios'
					element={
						<Layout>
							<Users />
						</Layout>
					}
				/>
				<Route
					exact
					path='/categorias'
					element={
						<Layout>
							<Category />
						</Layout>
					}
				/>
				<Route
					exact
					path='/moedas'
					element={
						<Layout>
							<Currency />
						</Layout>
					}
				/>

				<Route
					exact
					path='/faturas'
					element={
						<Layout>
							<Invoices />
						</Layout>
					}
				/>
				<Route
					exact
					path='/paginas_templates'
					element={
						<Layout>
							<PagesTemplates />
						</Layout>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default ApplicationRoutes;
