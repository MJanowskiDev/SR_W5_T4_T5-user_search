import { useState } from 'react';
import { UserSearch, User } from '..';
const styles = {
	container: {
		width: '100%',
		border: '1px solid black',
		borderRadius: 6,
		padding: 10,
		display: 'flex',
		flexDirection: 'column'
	},
	usersContainer: {
		maxHeight: 500,
		overflowY: 'auto',
		borderRadius: 6
	},
	noEntries: {
		textAlign: 'center',
		fontWeight: 500,
		letter: 1,
		color: '#c32e2e'
	},
	header: {
		fontWeight: 500,
		paddingBottom: 10,
		textAlign: 'center'
	},
	colorText: {
		color: '#116d9a'
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

	const filterUsers = (usersList, query) => {
		if (query !== '') {
			return usersList.filter((user) => user.first_name.includes(query) || user.last_name.includes(query));
		} else {
			return usersList;
		}
	};

	const noUsersFound = <p style={styles.noEntries}>No entries found</p>;

	const usersList = (
		<div style={styles.usersContainer}>{filteredUsers.map((user, id) => <User key={user.id} id={id} user={user} />)}</div>
	);

	const searchPhraseInfo = (
		<div>
			<hr />
			<span>
				Active filter: <span style={styles.colorText}>{searchPhrase}</span>
			</span>
		</div>
	);

	const entriesCountInfo = (
		<div>
			<hr />
			<span>
				Entries count: <span style={styles.colorText}>{filteredUsers.length}</span>
			</span>
		</div>
	);

	return (
		<div style={styles.container}>
			<span style={styles.header}>Users list component</span>

			<UserSearch onSearch={handleOnSearch} />

			{filteredUsers.length > 0 ? usersList : noUsersFound}
			{filteredUsers.length > 0 && entriesCountInfo}
			{searchPhrase && searchPhraseInfo}
		</div>
	);
};

export default UserList;
