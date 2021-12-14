import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import InfoPost from '../pages/info-post';
import InfoAuthor from '../pages/info-author';
import SearchResult from '../pages/search-result';
import Layout from '../components/Layout';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import AuthorPosts from '../pages/author-posts';

const ApplicationRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/login' element={<SignIn />} />
				<Route exact path='/cadastrar' element={<SignUp />} />
				<Route exact path='/' element={<Navigate to='home' />} />
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
					path='/infopost/:idpost'
					element={
						<Layout>
							<InfoPost />
						</Layout>
					}
				/>
				<Route
					exact
					path='/search/:idsearch'
					element={
						<Layout>
							<SearchResult />
						</Layout>
					}
				/>
				<Route
					exact
					path='/author/:idauthor'
					element={
						<Layout>
							<InfoAuthor />
						</Layout>
					}
				/>
				<Route
					exact
					path='/author/:idauthor/myposts'
					element={
						<Layout>
							<AuthorPosts />
						</Layout>
					}
				/>
				<Route exact path='*' element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default ApplicationRoutes;
