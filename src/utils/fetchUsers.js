const fetchUsers = () =>
	fetch('./users.json')
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error(error);
			return [];
		});

export default fetchUsers;
