const styles = {
	container: {
		height: 20,
		display: 'flex',
		alignItems: 'center',
		padding: 8
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
		<div style={getStyleById(id)}>
			{user.first_name} {user.last_name}
		</div>
	);
};

export default User;
