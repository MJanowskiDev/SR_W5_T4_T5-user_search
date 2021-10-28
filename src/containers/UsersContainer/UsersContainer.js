import { useEffect, useState } from 'react';
import { UserList, Loading } from '../../components';

const styles = {
	container: {
		width: '30vw',
		minWidth: 250
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

	if (loading) return <Loading />; //Loader shows after 1s delay to avoid loader blink effect

	return (
		<div style={styles.container}>
			{loading && <p>Loading</p>}
			<UserList users={users} />
		</div>
	);
};

export default UsersContainer;
