import { useEffect, useState } from 'react';
import { UserList, Loading } from '../../components';

const styles = {
	container: {
		width: '50vw',
		minWidth: 300,
		maxWidth: 500,
		height: 500
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
			{loading && <p>Loading</p>}
			<UserList users={users} />
		</div>
	);
};

export default UsersContainer;
