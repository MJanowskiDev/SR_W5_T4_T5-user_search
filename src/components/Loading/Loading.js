import classes from './Loading.module.css';

const Loading = () => {
	return (
		<div className={classes.loading}>
			<div className={classes.lds_ripple}>
				<div />
				<div />
			</div>
			<div>Loading</div>
		</div>
	);
};

export default Loading;
