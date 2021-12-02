import ClipLoader from 'react-spinners/ClipLoader';
import classes from './Loading.module.css';

const Loading = () => {
	return (
		<div className={classes.Loading}>
			<ClipLoader loading={true} />
		</div>
	);
};

export default Loading;
