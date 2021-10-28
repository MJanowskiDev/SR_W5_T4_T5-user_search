import { Link } from 'react-router-dom';
const styles = {
	container: {
		height: 20,
		display: 'flex',
		alignItems: 'center',
		padding: 8,
		textDecoration: 'none',
		color: 'black'
	},
	odd: {
		background: '#e2e2e2'
	},
	even: {
		background: 'white'
	}
};
const getStyleById = (id) => {
	if (id % 2 === 0) {
		return { ...styles.container, ...styles.even };
	} else {
		return { ...styles.container, ...styles.odd };
	}
};
const User = ({ user, id }) => {
	return (
		<Link
			style={getStyleById(id)}
			to={{
				pathname: `/user-profile/${user.id}`,
				state: { user: user }
			}}
		>
			{user.first_name} {user.last_name}
		</Link>
	);
};

export default User;
