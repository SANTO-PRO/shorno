const Overlay = ({ className }) => {
	return (
		<div
			id="overlay"
			className={`absolute top-0 left-0 inset-0 z-0 ${className}`}
		/>
	);
};

export default Overlay;
