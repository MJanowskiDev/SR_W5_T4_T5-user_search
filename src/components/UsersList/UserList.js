import { useState } from 'react';
import { UserSearch, User } from '..';
const styles = {
	usersContainer: {
		maxHeight: '50vh',
		overflowY: 'auto'
	},
	noEntries: {
		textAlign: 'center',
		fontWeight: 500,
		letter: 1
	}
};
const UserList = ({ users }) => {
	const [ searchPhrase, setSearchPhrase ] = useState('');
	const [ filteredUsers, setFilteredUsers ] = useState(users);

	const handleOnSearch = (searchText) => {
		setSearchPhrase(searchText);
		const filteredUsersList = filterUsers(users, searchText);
		setFilteredUsers(filteredUsersList);
	};

	console.log(filteredUsers);

	const filterUsers = (usersList, query) => {
		if (query !== '') {
			return usersList.filter((user) => user.first_name.includes(query) || user.last_name.includes(query));
		} else {
			return usersList;
		}
	};

	const noUsersFound = <p style={styles.noEntries}>No entries found</p>;

	const usersList = (
		<div style={styles.usersContainer}>{filteredUsers.map((user) => <User key={user.id} user={user} />)}</div>
	);

	return (
		<div style={styles.container}>
			<UserSearch onSearch={handleOnSearch} />
			{filteredUsers.length > 0 ? usersList : noUsersFound}
			{searchPhrase && <span>Active filter: {searchPhrase}</span>}
		</div>
	);
};

export default UserList;
