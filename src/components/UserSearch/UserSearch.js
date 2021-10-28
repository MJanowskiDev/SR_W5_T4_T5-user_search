import { useRef } from 'react';

const styles = {
	container: {
		width: '100%',
		maxWidth: 700
	},
	button: {
		width: 30,
		height: 30,
		float: 'left',
		position: 'relative',
		top: -33,
		left: 'calc(100% - 25px)',
		background: 'white',
		border: 'unset'
	},
	input: { width: '100%', height: 30, borderRadius: 6, padding: '1px 3px' }
};

const UserSearch = ({ onSearch }) => {
	const searchFieldRef = useRef();

	const keyPressHandle = (e) => {
		if (e.key === 'Enter') {
			const searchPhrase = searchFieldRef.current.value;
			onSearch && onSearch(searchPhrase);
		}
	};

	const handlePhraseClear = () => {
		searchFieldRef.current.value = '';
		onSearch && onSearch('');
	};
	return (
		<div style={styles.container}>
			<input
				style={styles.input}
				ref={searchFieldRef}
				onKeyDown={keyPressHandle}
				type='text'
				placeholder='Search users'
			/>
			<button style={styles.button} onClick={handlePhraseClear}>
				x
			</button>
		</div>
	);
};

export default UserSearch;
