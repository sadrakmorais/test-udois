import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import NavBarHeader from '../../components/navbar-header';
import { Container, Workspace } from './styles';

const Layout = ({ children }) => {
	const workspaceRef = useRef(null);
	const [scrolling, setScrolling] = useState(false);

	const resgateScrolling = useParams();

	useEffect(() => {
		workspaceRef.current.scrollTo(0, 0);
	}, [resgateScrolling]);

	useEffect(() => {
		workspaceRef.current.addEventListener('scroll', () => {
			if (workspaceRef.current.scrollTop > 20) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		});
	}, []);

	return (
		<Container>
			<NavBarHeader scroll={scrolling} />
			<Workspace ref={workspaceRef}>{children}</Workspace>
		</Container>
	);
};

export default Layout;
