import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserList, Loading } from '../../components';

const styles = {
	container: {
		width: '50vw',
		minWidth: 300,
		maxWidth: 500
	}
};

const UsersContainer = () => {
	const [ users, setUsers ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		fetch('./users.json').then((res) => res.json()).then((data) => {
			setUsers(data);
			setLoading(false);
		});
	}, []);

	//Loader shows after 1s delay to avoid loader blink effect
	if (loading) return <Loading />;

	return (
		<div style={styles.container}>
			<UserList users={users} />
			<br />
			<Link to="/user-profile/1">User link by ID: 1</Link>
		</div>
	);
};

export default UsersContainer;
