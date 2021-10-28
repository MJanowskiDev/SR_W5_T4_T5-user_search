import { useEffect, useState } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const UserDetails = () => {
	const location = useLocation();
	const params = useParams();

	const [ users, setUsers ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			if (location && location.state) {
				setUsers(location.state.user);
				setLoading(false);
			} else {
				fetch('/users.json').then((res) => res.json()).then((data) => {
					setUsers(data.find((user) => user.id === Number(params.id))); // in future fetch user by ID
					setLoading(false);
				});
			}
		},
		[ location, params ]
	);
	if (loading) return <Loading />;
	return (
		<div>
			<h1>User details</h1>
			{Object.keys(users).map((fieldName) => (
				<p key={fieldName}>
					{fieldName.replace('_', ' ').toLocaleUpperCase()}: <strong>{users[fieldName]}</strong>
				</p>
			))}
			<Link to="/users">Go back to home</Link>
		</div>
	);
};

export default UserDetails;
